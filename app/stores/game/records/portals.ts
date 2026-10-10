import type { GameRecordPortal } from '~/types/game'

// @unocss-include

export default [
	{
		icon: 'i-custom:maimai',
		name: '舞萌 (maimai)',
		href: '/game/records/maimai'
	},
	{
		icon: 'i-arcticons:osu',
		name: 'osu!',
		href: '/game/records/osu'
	},
	{
		icon: 'i-arcticons:minecraft',
		name: '我的世界 (Minecraft)',
		href: '/game/records/minecraft'
	},
	{
		icon: 'i-arcticons:malody-v',
		name: '马老弟 (Malody)',
		href: '/game/records/malody'
	},
	{
		icon: 'i-arcticons:geometry-dash',
		name: '几何冲刺 (Geometry Dash)',
		href: '/game/records/geometry_dash'
	},
	{
		icon: 'i-custom:tetrio',
		name: 'tetr.io',
		href: '/game/records/tetrio'
	}
] satisfies GameRecordPortal[]