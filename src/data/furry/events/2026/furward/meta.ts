import { filter, isNullish } from 'remeda';

import type { Event } from '@/data/furry/events';

import { createDate } from '@/utils/date';

export default {
	banner: new URL('assets/banner.bin', import.meta.url).toString(),

	name: '兽行迹',
	fullName: '兽行迹·沙地生灵诗篇',

	startDate: createDate(2026, 5, 1).toISOString(),
	endDate: createDate(2026, 5, 4).toISOString(),

	href: 'https://www.furward.cn/article/1',
	characters: filter(await useFurryCharacters(), (character) => {
		if (isNullish(character.slug)) {
			return false;
		}

		return ['z'].includes(character.slug);
	}),
} satisfies Event;