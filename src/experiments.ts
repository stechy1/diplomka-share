export interface Experiment {
    id?: number;
    name: string;
    description: string;
    type: ExperimentType;
    created: number;
    output: {
        led?: boolean;
        image?: boolean;
        sound?: boolean;
    };
    // Počet výstupů
    outputCount: number;
}

export enum ExperimentType {
    NONE, ERP, CVEP, FVEP, TVEP, REA
}

export interface ExperimentERP extends Experiment {
    // Maximální hodnota parametru distribution value pro všechny výstupy dané konfigurace
    maxDistributionValue: number;
    // Doba v [ms], po kterou je výstup aktivní
    out: number;
    // Doba v [ms], po kterou je výstup neaktivní
    wait: number;
    // Hrana, na kterou bude experiment reagovat
    edge: Edge;
    // Náhodnost experimentu
    random: Random;
    // Přiřazené výstupy
    outputs: ErpOutput[];
}

/**
 * Výčet typu hrany sestupná/náběžná
 */
export enum Edge {
    LEADING, FALLING
}

/**
 * Výčet typu náhodnosti žádná/krátká/dlouhá/krátká i dlouhý
 */
export enum Random {
    OFF, SHORT, LONG, SHORT_LONG
}

export interface ErpOutput {
    // Unikátní ID přes všechny výstupy
    id: number;
    // ID experimentu, ke kterému je výstup přiřazen
    experimentId: number;
    // Pořadí výstupu (1 - 8)
    orderId: number;
    pulseUp: number;
    pulseDown: number;
    distribution: number;
    brightness: number;
    dependencies: [OutputDependency[], any]
}

export interface OutputDependency {
    id: number;
    experimentId: number;
    sourceOutput: number;
    destOutput: number;
    count: number;
}

export interface ExperimentCVEP extends Experiment {
    // Doba v [ms], po kterou je výstup aktivní
    out: number;
    // Doba v [ms], po kterou je výstup neaktivní
    wait: number;
    // Pattern, podle kterého budou výstupy blikat
    pattern: number;
    // Bitový posun jednotlivých výstupů od sebe o proti hlavnímu patternu
    bitShift: number;
    // Svítivost všech výstupů
    brightness: number;
}

export interface ExperimentFVEP extends Experiment {
    // Pole jednotlivých výstupů
    outputs: FvepOutput[];
}

export interface FvepOutput {
    // Unikátní ID přes všechny výstupy
    id: number;
    // ID experimentu, ke kterému je výstup přiřazen
    experimentId: number;
    // Pořadí výstupu (1 - 8)
    orderId: number;
    // Doba, po kterou bude výstup svítit
    timeOn: number;
    // Doba, po kterou bude výstup zhasnutý
    timeOff: number;
    // Frekvence opakování jednoho kola
    frequency: number;
    // Poměr doby svícení vzhledem k zadané periodě
    dutyCycle: number;
    // Svítivost všech výstupů
    brightness: number;
}

export interface ExperimentTVEP extends Experiment {
    // Pole jednotlivých výstupů
    outputs: TvepOutput[];
}

export interface TvepOutput {
    // Unikátní ID přes všechny výstupy
    id: number;
    // ID experimentu, ke kterému je výstup přiřazen
    experimentId: number;
    // Pořadí výstupu (1 - 8)
    orderId: number;
    // Délka patternu
    patternLength: number;
    // Pattern, podle kterého bude výstup blikat
    pattern: number;
    // Doba v [ms], po kterou je výstup aktivní
    out: number;
    // Doba v [ms], po kterou je výstup neaktivní
    wait: number;
    // Svítivost všech výstupů
    brightness: number;
}

export function experimentTypeFromRaw(raw: string): ExperimentType {
    switch (raw.toUpperCase()) {
        case ExperimentType[ExperimentType.ERP]:
            return ExperimentType.ERP;
        case ExperimentType[ExperimentType.CVEP]:
            return ExperimentType.CVEP;
        case ExperimentType[ExperimentType.TVEP]:
            return ExperimentType.TVEP;
        case ExperimentType[ExperimentType.FVEP]:
            return ExperimentType.FVEP;
        case ExperimentType[ExperimentType.REA]:
            return ExperimentType.REA;
        default:
            return ExperimentType.NONE;

    }

}

export function createEmptyExperiment(): Experiment {
    return {
        name: '',
        description: '',
        created: new Date().getTime(),
        type: ExperimentType.NONE,
        output: {},
        outputCount: 1
    };
}
