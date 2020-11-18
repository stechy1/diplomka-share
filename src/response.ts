export interface ResponseMessage {
    code: number
    params?: Record<string, unknown>,
}

export interface ResponseObject<T> {
    data?: T;
    message?: ResponseMessage;
}

