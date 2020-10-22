export interface FileRecord {
	hash: string;
	name: string;
	path: string;
	isDirectory: boolean;
	isImage: boolean;
	width?: number;
	height?: number;
	extention: string;
	selected: boolean;
}
