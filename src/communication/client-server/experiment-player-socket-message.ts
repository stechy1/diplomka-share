import { IOEvent } from "../../serial-data-events";
import { PlayerConfiguration } from '../../player';
import { SocketMessage } from "./socket-message";
import { SocketMessageType } from "./socket-message-type";
import { SocketMessageSpecialization } from "./socket-message-specialization";

export class ExperimentPlayerDataIOMessage implements SocketMessage {

	public readonly type = SocketMessageType.EXPERIMENT_PLAYER_DATA_IO;
	public readonly specialization = SocketMessageSpecialization.EXPERIMENT_PLAYER;
	public readonly data: { ioEvent: IOEvent }

	constructor(ioEvent: IOEvent) {
		this.data = { ioEvent }
	}
}

export class ExperimentPlayerStateMessage implements SocketMessage {

	public readonly type = SocketMessageType.EXPERIMENT_PLAYER_STATE;
	public readonly specialization = SocketMessageSpecialization.EXPERIMENT_PLAYER;
	public readonly data: PlayerConfiguration;

	constructor(data: PlayerConfiguration) {
		this.data = data;
	}
}
