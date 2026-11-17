import type { FurryCharacter } from '~/types/furry'

import illustration from '~/stores/furry/characters/wanbing/assets/illustration.bin?url'

export default {
	illustrations: [illustration],

	name: '豌冰',

	owner: {
		slug: 'wanbing',
		type: 'friend'
	},

	species: [
		{
			name: '猫',
			percent: 50
		},
		{
			name: '狗',
			percent: 50
		}
	]
} as const satisfies FurryCharacter