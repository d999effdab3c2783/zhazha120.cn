import type { FurryCharacter } from '~/types/furry'

import illustration from '~/stores/furry/characters/geo/assets/illustration.bin?url'

export default {
	illustrations: [illustration],

	name: '基奥',

	owner: {
		slug: 'wanbing',
		type: 'friend'
	},

	species: [
		{
			name: '狼',
			percent: 100
		}
	]
} as const satisfies FurryCharacter