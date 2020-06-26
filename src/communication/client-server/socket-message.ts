import { SocketMessageType } from './socket-message-type';
import { SocketMessageSpecialization } from './socket-message-specialization';

export interface SocketMessage {
    type: SocketMessageType;
    specialization: SocketMessageSpecialization;
    data: any
}


