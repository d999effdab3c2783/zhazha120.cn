import type { Event } from '@/data/furry/events';

import Z from '@/data/furry/characters/z/meta';
import { createDate } from '@/utils/date';

export default {
	banner: new URL('assets/banner.bin', import.meta.url).toString(),

	name: '那个兽聚',
	fullName: '那个兽聚·继承者们',

	startDate: createDate(2026, 7, 10).toISOString(),
	endDate: createDate(2026, 7, 12).toISOString(),

	href: 'https://www.thatfurcon.com',
	characters: [Z],
} satisfies Event;