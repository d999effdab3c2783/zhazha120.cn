import banner from '~/stores/furry/events/2026/furward/assets/banner.webp?url'
import Extra from '~/stores/furry/events/2026/furward/components/extra.vue'
import type { FurryEvent } from '~/types/furry'
import { createDate } from '~/utils/date'

export default {
	banner,

	name: '兽行迹',
	theme: '沙地生灵诗篇',

	startDate: createDate(2026, 5, 1).toISOString(),
	endDate: createDate(2026, 5, 4).toISOString(),

	href: 'https://www.furward.cn/article/1',

	charactersQuery: 'slug : ["Z"]',

	renderExtra: () => {
		return <Extra />
	}
} as const satisfies FurryEvent