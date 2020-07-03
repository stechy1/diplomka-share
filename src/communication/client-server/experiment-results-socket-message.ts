import { SocketMessage } from "./socket-message";
import { SocketMessageSpecialization } from "./socket-message-specialization";
import { SocketMessageType } from "./socket-message-type";

export class ExperimentResultCreatedMessage implements SocketMessage {

	public readonly specialization = SocketMessageSpecialization.EXPERIMENT_RESULTS;
	public readonly type = SocketMessageType.EXPERIMENT_RESULT_CREATED;
	public readonly data: { experimentResultID: number }

	constructor(experimentResultID: number) {
		this.data = { experimentResultID }
	}
}
