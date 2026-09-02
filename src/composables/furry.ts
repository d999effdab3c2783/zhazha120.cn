import type { Character } from '@/data/furry/characters';

export type UseFurryCharactersReturn = Record<string, Character>;

export const useFurryCharacters = (): UseFurryCharactersReturn => {
	let unknownCounter = 0;

	return Object.fromEntries(
		Object.entries(
			import.meta.glob<Character>('@/data/furry/characters/*/meta.*', {
				eager: true,
				import: 'default',
			}),
		).map(([path, character]) => {
			return [path.split('/').at(-2) ?? `unknown-${++unknownCounter}`, character];
		}),
	);
};