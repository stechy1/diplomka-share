import { SocketMessageType } from './socket-message-type';
import { SocketMessageSpecialization } from './socket-message-specialization';
import { SocketMessage, SocketNotification } from './socket-message';

export class ClientReadyMessage implements SocketMessage {
    public readonly type = SocketMessageType.CLIENT_READY;
    public readonly specialization = SocketMessageSpecialization.CLIENT;
    public readonly data = null;
    public readonly notification?: SocketNotification;

    constructor(notification?: SocketNotification) {
        this.notification = notification;
    }
}
