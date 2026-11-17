import type { FurryCharacter } from '~/types/furry'

import illustration from '~/stores/furry/characters/eulogy/assets/illustration.bin?url'

export default {
	description: '是一位栖居于混沌异空间中的守护神, 拥有异瞳与银色卷发, 沉默而脆弱, 却始终守护着这片不稳定世界',

	illustrations: [illustration],

	name: '伊诔/Eulogy',

	owner: {
		slug: '13roil',
		type: 'friend'
	},

	species: [
		{
			name: '神性',
			percent: 60
		},
		{
			name: '兔',
			percent: 30
		},
		{
			name: '精灵',
			percent: 10
		}
	]
} as const satisfies FurryCharacter