import { SocketMessageType } from './socket-message-type';
import { SocketMessageSpecialization } from './socket-message-specialization';
import { SocketMessage } from './socket-message';

export interface ClientReadyMessage extends SocketMessage {
    type: SocketMessageType.CLIENT_READY;
    specialization: SocketMessageSpecialization.CLIENT;
    data: void;
}
