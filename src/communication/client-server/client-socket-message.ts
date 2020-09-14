import { SocketMessageType } from './socket-message-type';
import { SocketMessageSpecialization } from './socket-message-specialization';
import { SocketMessage } from './socket-message';

export class ClientReadyMessage implements SocketMessage {
    public readonly type = SocketMessageType.CLIENT_READY;
    public readonly specialization = SocketMessageSpecialization.CLIENT;
    public readonly data = null;
}
