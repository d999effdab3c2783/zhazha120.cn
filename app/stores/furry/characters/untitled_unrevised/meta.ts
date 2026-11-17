import type { FurryCharacter } from '~/types/furry'

import illustration from '~/stores/furry/characters/untitled_unrevised/assets/illustration.bin?url'

export default {
	illustrations: [illustration],

	name: 'Untitled_unrevised',

	owner: {
		slug: 'untitled_unrevised',
		type: 'friend'
	},

	species: [
		{
			name: '狗',
			percent: 100
		}
	]
} as const satisfies FurryCharacter