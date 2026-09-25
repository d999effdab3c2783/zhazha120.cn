import { useNow } from '@vueuse/core'
import { computed } from 'vue'

import type { FooterCopyright } from '~/types/footer'

const now = useNow()

export default {
	startYear: 2022,
	endYear: computed(() => {
		return now.value.getFullYear()
	})
} as const satisfies FooterCopyright