import { SocketMessage, SocketNotification } from "./socket-message";
import { SocketMessageType } from "./socket-message-type";
import { SocketMessageSpecialization } from "./socket-message-specialization";

export class ExperimentToggleOutputSynchronizationMessage implements SocketMessage {

    public readonly type = SocketMessageType.EXPERIMENT_TOGGLE_SYNCHRONIZATION;
    public readonly specialization = SocketMessageSpecialization.EXPERIMENTS;
    public readonly data: { synchronize: boolean };
    public readonly notification?: SocketNotification;

    constructor(synchronize: boolean, notification?: SocketNotification) {
        this.data = { synchronize };
        this.notification = notification;
    }

}