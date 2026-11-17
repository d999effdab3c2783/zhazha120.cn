import type { FurryCharacter } from '~/types/furry'

import illustration from '~/stores/furry/characters/awedwd/assets/illustration.bin?url'

export default {
	illustrations: [illustration],

	name: 'awedwd',

	owner: {
		slug: 'awedwd',
		type: 'friend'
	},

	species: [
		{
			name: '狗',
			percent: 100
		},
		{
			name: '笨蛋',
			percent: 120
		},
		{
			name: '紫薯',
			percent: 50
		},
		{
			name: '芋头',
			percent: 50
		}
	],

	species_alias: '狼犬'
} as const satisfies FurryCharacter