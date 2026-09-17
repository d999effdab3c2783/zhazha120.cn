import type { LenisOptions } from 'lenis'

export default {
	gsap: false,

	options: {
		autoRaf: true,
		respectReducedMotion: false
	}
} as const satisfies {
	readonly gsap: boolean

	readonly options: LenisOptions
}