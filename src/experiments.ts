export interface Experiment {
    // Unikátní ID přes všechny experimenty
    id?: number;
    // Název experimentu
    name: string;
    // Popis experimentu
    description: string;
    // Typ experimentu
    type: ExperimentType;
    // Časová značka založení experimentu
    created: number;
    // Typy použitých výstupů
    usedOutputs: OutputType;
    // Počet výstupů
    outputCount: number;
    // Tagy experimentu
    tags: string[];
    // Flag pro podporu sekvencí
    supportSequences: boolean
}

export enum ExperimentType {
    NONE, ERP, CVEP, FVEP, TVEP, REA
}

export interface OutputType {
    led?: boolean;
    image?: boolean;
    imageFile?: string;
    audio?: boolean;
    audioFile?: string;
}

export interface ExperimentERP extends Experiment, ExperimentSupportSequences {
    // Maximální hodnota parametru distribution value pro všechny výstupy dané konfigurace
    maxDistribution: number;
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
    // Příznak, zda-li mají výstupy sdílet délku patternu
    sharePatternLength: boolean;
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

export interface ExperimentREA extends Experiment {
    // Počet cyklů v experimentu
    cycleCount: number;
    // Minimální prodleva mezi jednotlivými výstupy
    waitTimeMin: number;
    // Maximální prodleva mezi jednotlivými výstupy
    waitTimeMax: number;
    // Doba, po kterou bude možné zareagovat na výstup
    // (většinou bude o pár desítek milisekund kratší, než 'waitTimeMax')
    missTime: number;
    // Jak se má pokračovat v případě, že uživatel stiskne špatné tlačítko
    onFail: ReaOnResponseFail;
    // Svítivost výstupu
    brightness: number;
}

export interface ExperimentSupportSequences {
    // ID sequence, která se použije, nebo null v případě žádné definované sequence
    sequenceId: number|null;
}

export enum ReaOnResponseFail {
    // Nový výstup se aktivuje okemžitě
    CONTINUE,
    // Počká se, než vyprší timeout a poté se pokračuje standardne
    WAIT
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
    const outputType: OutputType = {led: false, audio: false, image: false};
    // 0b0001
    if (outputTypeRaw & 0x01) {
        outputType.led = true;
    }
    // 0b0010
    if (outputTypeRaw & 0x02) {
        outputType.audio = true;
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
    if (outputType.led !== undefined && outputType.led) {
        outputTypeRaw |= 0x01;
    }
    // 0b0010
    if (outputType.audio !== undefined && outputType.audio) {
        outputTypeRaw |= 0x02;
    }
    // 0b0100
    if (outputType.image !== undefined && outputType.image) {
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
        usedOutputs: { led: true, image: false, audio: false, imageFile: undefined, audioFile: undefined },
        outputCount: 1,
        tags: [],
        supportSequences: false
    };
}

export function createEmptyExperimentERP(): ExperimentERP {
    const experiment: Experiment = createEmptyExperiment();
    experiment.type = ExperimentType.ERP;
    experiment.supportSequences = true;

    return {
        ...experiment,
        maxDistribution: 100,
        out: 1000,
        wait: 1000,
        edge: Edge.FALLING,
        random: Random.OFF,
        outputs: [],
        sequenceId: null
    }
}

export function createEmptyOutputERP(experiment: ExperimentERP, index: number): ErpOutput {
    return {
        id: 1,
        experimentId: experiment.id as number,
        orderId: index,
        outputType: { led: true, image: false, audio: false, imageFile: undefined, audioFile: undefined },
        pulseUp: 1000,
        pulseDown: 1000,
        distribution: 0,
        brightness: 100,
        dependencies: [[], null]
    };
}

export function createEmptyExperimentCVEP(): ExperimentCVEP {
    const experiment: Experiment = createEmptyExperiment();
    experiment.type = ExperimentType.CVEP;

    return {
        ...experiment,
        out: 1000,
        wait: 1000,
        pattern: 0,
        bitShift: 0,
        brightness: 100
    }
}

export function createEmptyExperimentFVEP(): ExperimentFVEP {
    const experiment: Experiment = createEmptyExperiment();
    experiment.type = ExperimentType.FVEP;

    return {
        ...experiment,
        outputs: []
    }
}

export function createEmptyOutputFVEP(experiment: ExperimentFVEP, index: number): FvepOutput {
    return {
        id: 1,
        experimentId: experiment.id as number,
        orderId: index,
        outputType: { led: true, image: false, audio: false, imageFile: undefined, audioFile: undefined },
        timeOn: 1000,
        timeOff: 1000,
        frequency: 2000,
        dutyCycle: 2,
        brightness: 100
    }
}

export function createEmptyExperimentTVEP(): ExperimentTVEP {
    const experiment: Experiment = createEmptyExperiment();
    experiment.type = ExperimentType.TVEP;

    return {
        ...experiment,
        sharePatternLength: true,
        outputs: []
    }
}

export function createEmptyOutputTVEP(experiment: ExperimentTVEP, index: number): TvepOutput {
    return {
        id: 1,
        experimentId: experiment.id as number,
        orderId: index,
        outputType: { led: true, image: false, audio: false, imageFile: undefined, audioFile: undefined },
        out: 1000,
        wait: 1000,
        patternLength: 1,
        pattern: 0,
        brightness: 100
    }
}

export function createEmptyExperimentREA(): ExperimentREA {
    const experiment: Experiment = createEmptyExperiment();
    experiment.type = ExperimentType.REA;

    return {
        ...experiment,
        cycleCount: 1,
        waitTimeMin: 1000,
        waitTimeMax: 1000,
        missTime: 1000,
        onFail: ReaOnResponseFail.CONTINUE,
        brightness: 100,
    }
}
