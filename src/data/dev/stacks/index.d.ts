export type StackItem = {
	readonly name: string;
	readonly icon: string;
	readonly href: string;
};

export type Stack = {
	readonly sort?: number;
	readonly name: string;

	readonly items: StackItem[];
};