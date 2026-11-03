import type { LenisOptions } from 'lenis'

import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

import { defaultOptions, enabled } from '@/app/config/lenis'

export const useLenisStore = defineStore('lenis', () => {
	const options = shallowRef<LenisOptions>(defaultOptions)

	return {
		enabled,
		options
	}
})