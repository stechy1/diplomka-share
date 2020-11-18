import { SocketMessageType } from './socket-message-type';
import { SocketMessageSpecialization } from './socket-message-specialization';
import { SocketMessage, SocketNotification } from './socket-message';

export class StimulatorConnectionStateMessage implements SocketMessage {

    public readonly type = SocketMessageType.STIMULATOR_CONNECTION_STATE;
    public readonly specialization = SocketMessageSpecialization.CONNECTION;
    public readonly data: { connected: boolean };
    public readonly notification?: SocketNotification;

    constructor(connected: boolean, notification?: SocketNotification) {
        this.data = { connected }
        this.notification = notification;
    }
}

export class IpcConnectionStateMessage implements SocketMessage {

    public readonly specialization = SocketMessageSpecialization.CONNECTION;
    public readonly type = SocketMessageType.IPC_CONNECTION_STATE;
    public readonly data: { connected: boolean };
    public readonly notification?: SocketNotification;

    constructor(connected: boolean, notification?: SocketNotification) {
        this.data = { connected }
        this.notification = notification;
    }

}
