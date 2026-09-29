import illustration from '~/stores/furry/characters/jacet/assets/illustration.webp?url'
import type { FurryCharacter } from '~/types/furry'

export default {
	illustration,

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
} as const satisfies FurryCharacter