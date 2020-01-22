export interface ResponseMessage {
    code: number
    params?: {},
}

export interface ResponseObject<T> {
    data?: T;
    message?: ResponseMessage;
}

