import banner from '~/stores/furry/events/2026/thatfurcon/assets/banner.webp?url'
import Extra from '~/stores/furry/events/2026/thatfurcon/components/extra.vue'
import type { FurryEvent } from '~/types/furry'
import { createDate } from '~/utils/date'

export default {
	banner,

	name: '那个兽聚',
	theme: '继承者们',

	startDate: createDate(2026, 7, 10).toISOString(),
	endDate: createDate(2026, 7, 12).toISOString(),

	href: 'https://www.thatfurcon.com',

	charactersQuery: 'slug : ["Z"]',

	renderExtra: () => {
		return <Extra />
	}
} as const satisfies FurryEvent