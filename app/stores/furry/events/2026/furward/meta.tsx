import type { FurryEvent } from '~/types/furry'

import banner from '~/stores/furry/events/2026/furward/assets/banner.bin?url'
import Extra from '~/stores/furry/events/2026/furward/components/extra.vue'
import { createDate } from '~/utils/date'

export default {
	banner,

	charactersQuery: 'slug : ["Z"]',

	endDate: createDate(2026, 5, 4).toISOString(),

	href: 'https://www.furward.cn/article/1',

	name: '兽行迹',

	renderExtra: () => {
		return <Extra />
	},

	startDate: createDate(2026, 5, 1).toISOString(),

	theme: '沙地生灵诗篇'
} as const satisfies FurryEvent