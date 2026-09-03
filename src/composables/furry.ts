import type { Character } from '@/data/furry/characters';
import type { Event } from '@/data/furry/events';

export type UseFurryCharactersReturn = Record<string, Character>;

export type UseFurryEventsReturn = Record<string, Event>;

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

export const useFurryEvents = (): UseFurryEventsReturn =>
	Object.fromEntries(
		Object.entries(
			import.meta.glob<Event>('@/data/furry/events/*/*/meta.*', {
				eager: true,
				import: 'default',
			}),
		).map(([path, event]) => {
			return [`${path.split('/').at(-2)}-${path.split('/').at(-3)}`, event];
		}),
	);