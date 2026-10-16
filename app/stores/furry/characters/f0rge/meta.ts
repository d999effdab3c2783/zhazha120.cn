import illustration from '~/stores/furry/characters/f0rge/assets/illustration.bin?url'
import type { FurryCharacter } from '~/types/furry'

export default {
	illustrations: [illustration],

	name: 'F0rge (無项)',
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

	species_alias: '鱼尾猫',

	owner: {
		type: 'friend',
		slug: 'f0rge'
	}
} as const satisfies FurryCharacter