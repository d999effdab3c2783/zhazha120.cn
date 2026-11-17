import type { FurryEvent } from '~/types/furry'

import banner from '~/stores/furry/events/2026/thatfurcon/assets/banner.bin?url'
import Extra from '~/stores/furry/events/2026/thatfurcon/components/extra.vue'
import { createDate } from '~/utils/date'

export default {
	banner,

	charactersQuery: 'slug : ["Z"]',

	endDate: createDate(2026, 7, 12).toISOString(),

	href: 'https://www.thatfurcon.com',

	name: '那个兽聚',

	renderExtra: () => {
		return <Extra />
	},

	startDate: createDate(2026, 7, 10).toISOString(),

	theme: '继承者们'
} as const satisfies FurryEvent