import type { Character } from '@/data/furry/characters';

export default {
	illustration: new URL('assets/illustration.bin', import.meta.url).toString(),

	name: '豌冰',
	species: [
		{
			name: '猫',
			percent: 50,
		},
		{
			name: '狗',
			percent: 50,
		},
	],

	description: '神秘的舞萌痴与 4k 痴, 食品科学锐意在读中',

	owner: {
		name: '豌冰',
		href: 'https://space.bilibili.com/519541121',
	},
} satisfies Character;