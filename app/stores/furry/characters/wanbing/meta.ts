import illustration from '~/stores/furry/characters/wanbing/assets/illustration.bin?url'
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
		type: 'friend',
		slug: 'wanbing'
	}
} as const satisfies FurryCharacter