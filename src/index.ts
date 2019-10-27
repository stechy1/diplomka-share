export interface ResponseObject<T> {
    data: T;
}

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
    }
}

export enum ExperimentType {
    NONE, ERP, CVEP, TVEP, FVEP, REA
}

export const Greeter = (name: string) => `Hello ${name}`;
