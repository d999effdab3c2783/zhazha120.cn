import illustration from '~/stores/furry/characters/bouvierc/assets/illustration.webp?url'
import type { FurryCharacter } from '~/types/furry'

export default {
	illustration,

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
	description: '这里是c酱, 不会画画不会音游',

	owner: {
		name: 'BouvierC',
		href: 'https://space.bilibili.com/384557759'
	}
} as const satisfies FurryCharacter