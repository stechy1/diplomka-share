import { SocketMessage } from './socket-message';
import { SocketMessageType } from './socket-message-type';
import { SocketMessageSpecialization } from './socket-message-specialization';

export class StimulatorDataStateMessage implements SocketMessage {

    public readonly specialization = SocketMessageSpecialization.STIMULATOR;
    public readonly type = SocketMessageType.STIMULATOR_DATA_STATE;
    public readonly data: { state: number }

    constructor(state: number) {
        this.data = { state };
    }
}