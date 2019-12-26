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

export interface OutputType {
    led?: boolean;
    image?: boolean;
    sound?: boolean;
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
    // Typ výstupu
    outputType: OutputType;
    // Doba aktivního výstupu
    pulseUp: number;
    // Doba neaktivního výstupu
    pulseDown: number;
    // Distribuce výstupu (pravděpodobnost, že se výstup ukáže v sekvenci)
    distribution: number;
    // Svítivost výstupu v případě LED
    brightness: number;
    // Závislosti výstupu na ostatních výstupech
    dependencies: [OutputDependency[], any]
}

export interface OutputDependency {
    // Unikádní ID přeš všechny závislosti výstupů
    id: number;
    // ID experimentu, ke kterému je závislost spřažena
    experimentId: number;
    // ID výstupu, ke kterému je závislost spřažena
    sourceOutput: number;
    // ID závislosti výstupu, na kterém tato závislost závisí
    destOutput: number;
    // Kolikrát se musí vyskytnout 'destOutput', než se bude moct vyskytnout 'sourceOutput'
    count: number;
}

export interface ExperimentCVEP extends Experiment {
    // Typ výstupu
    outputType: OutputType;
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
    // Typ výstupu
    outputType: OutputType;
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
    // Typ výstupu
    outputType: OutputType;
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

export function outputTypeFromRaw(outputTypeRaw: number): OutputType {
    const outputType: OutputType = {};
    // 0b0001
    if (outputTypeRaw & 0x01) {
        outputType.led = true;
    }
    // 0b0010
    if (outputTypeRaw & 0x02) {
        outputType.sound = true;
    }
    // 0b0100
    if (outputTypeRaw & 0x04) {
        outputType.image = true;
    }

    return outputType;
}

export function outputTypeToRaw(outputType: OutputType): number {
    let outputTypeRaw = 0;
    // 0b0001
    if (outputType.led) {
        outputTypeRaw |= 0x01;
    }
    // 0b0010
    if (outputType.sound) {
        outputTypeRaw |= 0x02;
    }
    // 0b0100
    if (outputType.image) {
        outputTypeRaw |= 0x04;
    }

    return outputTypeRaw;
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