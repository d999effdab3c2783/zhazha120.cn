import { computed } from 'vue'

import { useResponsive } from '~/composables/responsive'

// @unocss-include

const { isMobile } = useResponsive()

export const modal = computed(() => {
	return [
		{
			'm-2': isMobile.value
		},
		{
			'w-1/2 mx-auto': !isMobile.value
		}
	]
})