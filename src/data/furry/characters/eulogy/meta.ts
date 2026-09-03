import type { Character } from '@/data/furry/characters';

export default {
	illustration: new URL('assets/illustration.bin', import.meta.url).toString(),

	name: '伊诔/Eulogy',
	species: [
		{
			name: '兔',
			percent: 100,
		},
	],

	description: '是一位栖居于混沌异空间中的守护神, 拥有异瞳与银色卷发, 沉默而脆弱, 却始终守护着这片不稳定世界',

	owner: {
		name: 'ThirteenRoil',
		href: 'https://osu.ppy.sh/users/6528747',
	},
} satisfies Character;