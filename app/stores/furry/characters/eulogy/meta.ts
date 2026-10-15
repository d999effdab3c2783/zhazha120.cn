import illustration from '~/stores/furry/characters/eulogy/assets/illustration.bin?url'
import type { FurryCharacter } from '~/types/furry'

export default {
	illustration,

	name: '伊诔/Eulogy',
	species: [
		{
			name: '兔',
			percent: 100
		}
	],

	description: '是一位栖居于混沌异空间中的守护神, 拥有异瞳与银色卷发, 沉默而脆弱, 却始终守护着这片不稳定世界',

	owner: {
		type: 'friend',
		slug: '13roil'
	}
} as const satisfies FurryCharacter