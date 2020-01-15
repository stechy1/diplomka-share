export interface Sequence {
    id?: number;
    experimentId: number;
    name: string;
    created: number;
    data: number[];
    size: number;
    tags: string[];
}

export function createEmptySequence(): Sequence {
    return {
        name: '',
        experimentId: -1,
        created: new Date().getTime(),
        data: [],
        size: 0,
        tags: []
    };
}
