import { SocketMessage } from "./socket-message";
import { SocketMessageSpecialization } from "./socket-message-specialization";
import { SocketMessageType } from "./socket-message-type";

export class IpcSynchronizationMessage implements SocketMessage {

    public readonly specialization = SocketMessageSpecialization.ASSET_PLAYER;
    public readonly type = SocketMessageType.ASSET_PLAYER_SYNCHRONIZATION;
    public readonly data: { id: number, x: number, y: number };


    constructor(id: number, x: number, y: number) {
        this.data = { id, x, y };
    }
}