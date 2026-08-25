import type { LenisOptions } from 'lenis';

export default {
	gsap: false,
	options: {
		autoRaf: true,
		respectReducedMotion: false,
	} satisfies LenisOptions,
} as const;