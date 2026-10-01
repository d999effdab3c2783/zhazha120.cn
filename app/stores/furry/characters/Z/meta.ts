import illustration from '~/stores/furry/characters/Z/assets/illustration.bin?url'
import type { FurryCharacter } from '~/types/furry'

export default {
	illustration,

	name: 'Z',
	species: [
		{
			name: '狗',
			percent: 100
		}
	],

	species_alias: '折耳狗',
	description: '头顶有着专属于渣渣的标识图案',

	owner: {
		name: '渣渣120',
		href: '/'
	}
} as const satisfies FurryCharacter