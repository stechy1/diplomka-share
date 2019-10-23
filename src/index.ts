export interface ResponseObject<T> {
    records: T;
}

export interface Experiment {
    id: string;
    name: string;
    description: string;
    type: string;
    created: number;
    output: {
        led?: boolean;
        image?: boolean;
        sound?: boolean;
    }
}

export const Greeter = (name: string) => `Hello ${name}`;
