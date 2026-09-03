import type { Character, CharacterEntry } from '@/data/furry/characters';
import type { Event, EventEntry } from '@/data/furry/events';

export type UseFurryCharactersReturn = Promise<CharacterEntry[]>;

export type UseFurryEventsReturn = Promise<EventEntry[]>;

export const useFurryCharacters = async (): UseFurryCharactersReturn => {
	let unknownCounter = 0;

	return Promise.all(
		Object.entries(
			import.meta.glob<Character>('@/data/furry/characters/**/meta.*', {
				import: 'default',
			}),
		).map(async ([path, loader]) => {
			const character = await loader();

			Object.assign(character, {
				slug: path.split('/').at(-2) ?? `unknown-${++unknownCounter}`,
			});

			return character;
		}),
	);
};

export const useFurryEvents = async (): UseFurryEventsReturn => {
	let unknownCounter = 0;

	return Promise.all(
		Object.entries(
			import.meta.glob<Event>('@/data/furry/events/*/*/meta.*', {
				import: 'default',
			}),
		).map(async ([path, loader]) => {
			const parts = path.split('/');
			const event = await loader();

			Object.assign(event, {
				year: Number(parts.at(-3) ?? Number.NaN),
				slug: path.split('/').at(-2) ?? `unknown-${++unknownCounter}`,
			});

			return event;
		}),
	);
};