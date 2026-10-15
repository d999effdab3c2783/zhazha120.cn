import illustration from '~/stores/furry/characters/geo/assets/illustration.bin?url'
import type { FurryCharacter } from '~/types/furry'

export default {
	illustrations: [illustration],

	name: '基奥',
	species: [
		{
			name: '狼',
			percent: 100
		}
	],

	owner: {
		type: 'friend',
		slug: 'wanbing'
	}
} as const satisfies FurryCharacter