import type { LenisOptions } from 'lenis'
import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

import { enabled } from '~/stores/lenis/config'
import defaultOptions from '~/stores/lenis/options'

export const useLenisStore = defineStore('lenis', () => {
	const options = shallowRef<LenisOptions>(defaultOptions)

	return {
		enabled,
		options
	}
})