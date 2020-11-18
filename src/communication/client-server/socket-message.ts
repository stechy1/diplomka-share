import { SocketMessageType } from './socket-message-type';
import { SocketMessageSpecialization } from './socket-message-specialization';

export interface SocketNotification {
    code: number;
    params?: Record<string, unknown>
}

export interface SocketMessage {
    type: SocketMessageType;
    specialization: SocketMessageSpecialization;
    data: any;
    notification?: SocketNotification;
}


