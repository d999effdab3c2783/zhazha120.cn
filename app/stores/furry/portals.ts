import type { FurryPortal } from '~/types/furry'

// @unocss-include

export default [
	{
		href: '/furry/characters',
		icon: 'i-ant-design:contacts-outlined',
		name: '设定集'
	},
	{
		href: '/furry/events',
		icon: 'i-ant-design:calendar-outlined',
		name: '行程 & 活动'
	}
] as const satisfies FurryPortal[]