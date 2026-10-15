import illustration from '~/stores/furry/characters/wanbing/assets/illustration.bin?url'
import type { FurryCharacter } from '~/types/furry'

export default {
	illustrations: [illustration],

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

	owner: {
		type: 'friend',
		slug: 'wanbing'
	}
} as const satisfies FurryCharacter