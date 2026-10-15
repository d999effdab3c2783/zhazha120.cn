import type { GameRecordPortal } from '~/types/game'

// @unocss-include

export default [
	{
		icon: 'i-custom:maimai',
		name: '舞萌 (maimai)',
		href: '/owner/game/records/maimai'
	},
	{
		icon: 'i-arcticons:osu',
		name: 'osu!',
		href: '/owner/game/records/osu'
	},
	{
		icon: 'i-arcticons:minecraft',
		name: '我的世界 (Minecraft)',
		href: '/owner/game/records/minecraft'
	},
	{
		icon: 'i-arcticons:malody-v',
		name: '马老弟 (Malody)',
		href: '/owner/game/records/malody'
	},
	{
		icon: 'i-arcticons:geometry-dash',
		name: '几何冲刺 (Geometry Dash)',
		href: '/owner/game/records/geometry_dash'
	},
	{
		icon: 'i-custom:tetrio',
		name: 'tetr.io',
		href: '/owner/game/records/tetrio'
	}
] satisfies GameRecordPortal[]