import illustration from '~/stores/furry/characters/untitled_unrevised/assets/illustration.bin?url'
import type { FurryCharacter } from '~/types/furry'

export default {
	illustrations: [illustration],

	name: 'Untitled_unrevised',
	species: [
		{
			name: '狗',
			percent: 100
		}
	],

	owner: {
		type: 'friend',
		slug: 'untitled_unrevised'
	}
} as const satisfies FurryCharacter