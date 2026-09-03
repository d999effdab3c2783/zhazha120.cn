import type { Character } from '@/data/furry/characters';

export type Event = {
	readonly banner: string;

	readonly name: string;
	readonly fullName?: string;

	readonly startDate: string;
	readonly endDate: string;

	readonly href?: string;
	readonly characters?: Character[];

	readonly renderExtra?: () => VNode;
};

export type EventEntry = Event & {
	readonly year?: number;
	readonly slug?: string;
};