import illustration_1 from '~/stores/furry/characters/bouvierc/assets/illustration_1.bin?url'
import illustration_2 from '~/stores/furry/characters/bouvierc/assets/illustration_2.bin?url'
import illustration_3 from '~/stores/furry/characters/bouvierc/assets/illustration_3.bin?url'
import illustration_4 from '~/stores/furry/characters/bouvierc/assets/illustration_4.bin?url'
import illustration_5 from '~/stores/furry/characters/bouvierc/assets/illustration_5.bin?url'
import type { FurryCharacter } from '~/types/furry'

export default {
	illustrations: [illustration_1, illustration_2, illustration_3, illustration_4, illustration_5],

	name: 'BouvierC',
	species: [
		{
			name: '狼',
			percent: -1
		},
		{
			name: '亚空间邪魔',
			percent: Number.NaN
		}
	],

	species_alias: 'c酱 (?)',

	owner: {
		type: 'friend',
		slug: 'bouvierc'
	}
} as const satisfies FurryCharacter