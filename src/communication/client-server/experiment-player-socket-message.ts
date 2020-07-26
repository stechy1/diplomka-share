import { SocketMessage } from "./socket-message";
import { SocketMessageType } from "./socket-message-type";
import { SocketMessageSpecialization } from "./socket-message-specialization";
import { IOEvent } from "../../serial-data-events";

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
	public readonly data: { initialized: boolean, experimentRound: number, ioData: IOEvent[][] };

	constructor(initialized: boolean, experimentRound: number, ioData: IOEvent[][]) {
		this.data = { initialized, experimentRound, ioData };
	}
}
