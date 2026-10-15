import illustration from '~/stores/furry/characters/awedwd/assets/illustration.bin?url'
import type { FurryCharacter } from '~/types/furry'

export default {
	illustrations: [illustration],

	name: 'awedwd',

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

	species_alias: '狼犬',

	owner: {
		type: 'friend',
		slug: 'awedwd'
	}
} as const satisfies FurryCharacter