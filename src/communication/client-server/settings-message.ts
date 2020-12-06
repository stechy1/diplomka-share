import { Settings } from "../../settings";
import { SocketMessage, SocketNotification } from "./socket-message";
import { SocketMessageSpecialization } from "./socket-message-specialization";
import { SocketMessageType } from "./socket-message-type";

export class SettingsUpdateMessage implements SocketMessage {

    public readonly specialization = SocketMessageSpecialization.SETTINGS;
	public readonly type = SocketMessageType.SETTINGS_UPDATE;
	public readonly data: { settings: Settings }
	public readonly notification?: SocketNotification;

	constructor(settings: Settings, notification?: SocketNotification) {
		this.data = { settings }
		this.notification = notification;
	}
}
