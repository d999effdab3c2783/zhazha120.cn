import type { LenisOptions } from 'lenis'
import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

const enabled = true
const defaultOptions: LenisOptions = {
	autoRaf: true,
	respectReducedMotion: false
}

export const useLenisStore = defineStore('lenis', () => {
	const options = shallowRef<LenisOptions>(defaultOptions)

	return {
		enabled,
		options
	}
})