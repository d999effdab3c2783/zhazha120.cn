import type { FurryCharacter } from '~/types/furry'

import illustration from '~/stores/furry/characters/f0rge/assets/illustration.bin?url'

export default {
	illustrations: [illustration],

	name: 'F0rge (無项)',

	owner: {
		slug: 'f0rge',
		type: 'friend'
	},

	species: [
		{
			name: '猫',
			percent: 80
		},
		{
			name: '鱼',
			percent: 20
		}
	],

	species_alias: '鱼尾猫'
} as const satisfies FurryCharacter