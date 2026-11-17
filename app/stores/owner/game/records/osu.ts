import type { GameOsuManiaRecord, GameOsuRecordPortal } from '~/types/game'

// @unocss-include

export const overlay = 'https://osu-sig.vercel.app/card?user=16303789&mode=mania&animation=true'

export const mania = {
	'4k': {
		dan: {
			jack: 'β',
			long_note: 11,
			speed: 'γ',
			stamina: 'β',
			tech: 'γ'
		}
	}
} as const satisfies GameOsuManiaRecord

export const portals = [
	{
		href: 'https://osu.ppy.sh/users/16303789',
		icon: 'i-ant-design:profile-outlined',
		name: '资料'
	}
] as const satisfies GameOsuRecordPortal[]