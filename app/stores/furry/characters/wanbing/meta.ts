import illustration from '~/stores/furry/characters/wanbing/assets/illustration.webp?url'
import type { FurryCharacter } from '~/types/furry'

export default {
	illustration,

	name: '豌冰',
	species: [
		{
			name: '猫',
			percent: 50
		},
		{
			name: '狗',
			percent: 50
		}
	],

	description: '神秘的舞萌痴与 4k 痴, 食品科学锐意在读中',

	owner: {
		name: '豌冰',
		href: 'https://space.bilibili.com/519541121'
	}
} as const satisfies FurryCharacter