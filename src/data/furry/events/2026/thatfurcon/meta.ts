import { filter, isNullish } from 'remeda';

import type { Event } from '@/data/furry/events';

import { createDate } from '@/utils/date';

export default {
	banner: new URL('assets/banner.bin', import.meta.url).toString(),

	name: '那个兽聚',
	fullName: '那个兽聚·继承者们',

	startDate: createDate(2026, 7, 10).toISOString(),
	endDate: createDate(2026, 7, 12).toISOString(),

	href: 'https://www.thatfurcon.com',
	characters: filter(await useFurryCharacters(), (character) => {
		if (isNullish(character.slug)) {
			return false;
		}

		return ['z'].includes(character.slug);
	}),
} satisfies Event;