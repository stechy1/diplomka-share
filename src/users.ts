export interface User {
	id?: number;
	uuid?: string;
	username?: string;
	email?: string;
	password?: string
	lastLoginDate?: number;
	createdAt?: number;
	updatedAt?: number;
}

export function createEmptyUser(): User {
	return {
		username: '',
		email: '',
		password: '',
		lastLoginDate: new Date().getTime()
	}
}
