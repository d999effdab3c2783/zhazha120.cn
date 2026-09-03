import type { Event } from '@/data/furry/events';

import Z from '@/data/furry/characters/z/meta';
import { createDate } from '@/utils/date';

export default {
	banner: new URL('assets/banner.bin', import.meta.url).toString(),

	name: '兽行迹',
	fullName: '兽行迹·沙地生灵诗篇',

	startDate: createDate(2026, 5, 1).toISOString(),
	endDate: createDate(2026, 5, 4).toISOString(),

	href: 'https://www.furward.cn/article/1',
	characters: [Z],
} satisfies Event;