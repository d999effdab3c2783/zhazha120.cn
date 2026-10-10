import type { GameOsuManiaRecord, GameOsuRecordPortal } from '~/types/game'

// @unocss-include

export const overlay = 'https://osu-sig.vercel.app/card?user=16303789&mode=mania&animation=true'

export const mania = {
	'4k': {
		dan: {
			jack: 'β',
			tech: 'γ',
			speed: 'γ',
			stamina: 'β',
			long_note: 11
		}
	}
} as const satisfies GameOsuManiaRecord

export const portals = [
	{
		icon: 'i-ant-design:profile-outlined',
		name: '资料',
		href: 'https://osu.ppy.sh/users/16303789'
	}
] as const satisfies GameOsuRecordPortal[]