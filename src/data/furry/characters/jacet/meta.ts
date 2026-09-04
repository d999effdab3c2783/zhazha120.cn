import type { Character } from '@/data/furry/characters'

export default {
	illustration: new URL('assets/illustration.bin', import.meta.url).toString(),

	name: '澜星jacet',
	species: [
		{
			name: '鱼',
			percent: 100
		},
		{
			name: '笨蛋',
			percent: 99
		}
	],

	description: '澜澜是个是个大笨鱼',

	owner: {
		name: '澜星jacet',
		href: 'https://space.bilibili.com/1752668024'
	}
} satisfies Character