import { useNow } from '@vueuse/core'
import { computed } from 'vue'

import { name } from '~/stores/owner/information'
import type { FooterCopyright } from '~/types/footer'

const now = useNow()

export default {
	startYear: 2022,
	endYear: computed(() => {
		return now.value.getFullYear()
	}),

	comment: `${name} | 碎片空间`
} as const satisfies FooterCopyright