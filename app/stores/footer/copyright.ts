import type { FooterCopyright } from '~/types/footer'

import { useNow } from '@vueuse/core'
import { computed } from 'vue'

import { name } from '~/stores/owner/information'

const now = useNow()

export default {
	comment: `${name} | 碎片空间`,
	endYear: computed(() => {
		return now.value.getFullYear()
	}),
	startYear: 2022
} as const satisfies FooterCopyright