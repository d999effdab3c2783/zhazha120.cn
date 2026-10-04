import type { FurryAssign } from '~/types/furry'

export default [
	{
		name: '狄貊',
		role: '设计 & 画师妈咪'
	},
	{
		name: '栗糖',
		role: '装师'
	},
	{
		name: 'Chars茶茶',
		role: '立绘画师',

		links: [
			{
				name: '米画师',
				href: 'https://www.mihuashi.com/profiles/2900931'
			}
		]
	}
] as const satisfies FurryAssign[]