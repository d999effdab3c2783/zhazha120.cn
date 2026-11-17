import type { FurryCharacter } from '~/types/furry'

import illustration from '~/stores/furry/characters/jacet/assets/illustration.bin?url'

export default {
	description: '澜澜是个是个大笨鱼',

	illustrations: [illustration],

	name: '澜星jacet',

	owner: {
		slug: 'jacet',
		type: 'friend'
	},

	species: [
		{
			name: '鱼',
			percent: 100
		},
		{
			name: '笨蛋',
			percent: 99
		}
	]
} as const satisfies FurryCharacter