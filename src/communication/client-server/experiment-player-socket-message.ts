import { IOEvent } from "../../serial-data-events";
import { PlayerConfiguration } from '../../player';
import { SocketMessage, SocketNotification } from "./socket-message";
import { SocketMessageType } from "./socket-message-type";
import { SocketMessageSpecialization } from "./socket-message-specialization";

export class ExperimentPlayerDataIOMessage implements SocketMessage {

	public readonly type = SocketMessageType.EXPERIMENT_PLAYER_DATA_IO;
	public readonly specialization = SocketMessageSpecialization.EXPERIMENT_PLAYER;
	public readonly data: { ioEvent: IOEvent }
	public readonly notification?: SocketNotification;

	constructor(ioEvent: IOEvent, notification?: SocketNotification) {
		this.data = { ioEvent }
		this.notification = notification;
	}
}

export class ExperimentPlayerStateMessage implements SocketMessage {

	public readonly type = SocketMessageType.EXPERIMENT_PLAYER_STATE;
	public readonly specialization = SocketMessageSpecialization.EXPERIMENT_PLAYER;
	public readonly data: PlayerConfiguration;
	public readonly notification?: SocketNotification;

	constructor(data: PlayerConfiguration, notification?: SocketNotification) {
		this.data = data;
		this.notification = notification;
	}
}
