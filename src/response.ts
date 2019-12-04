export interface ResponseMessage {
    text: string,
    type: ResponseMessageType
}

export enum ResponseMessageType {
    SUCCESS, INFO, WARNING, ERROR
}

export interface ResponseObject<T> {
    data?: T;
    message?: ResponseMessage;
}

