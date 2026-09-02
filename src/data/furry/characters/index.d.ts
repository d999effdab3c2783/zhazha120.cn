export type Character = {
	readonly illustration: {
		readonly src: string;
	};

	readonly name: string;

	readonly species: Array<{
		readonly name: string;
		readonly percent: number;
	}>;

	readonly species_alias?: string;
	readonly description?: string;

	readonly owner?: {
		readonly name: string;
		readonly href?: string;
	};
};

export type CharacterEntry = Character & {
	readonly slug?: string;
};