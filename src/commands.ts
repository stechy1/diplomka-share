export interface ServerCommand {

}

export interface ClientCommand<T> {
	isValid: (params: string[]) => [boolean, string?];
	getName: () => string;
	getValue: (params: string[]) => T;
}
