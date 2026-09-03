import type { Character } from '@/data/furry/characters';

export default {
	illustration: new URL('assets/illustration.bin', import.meta.url).toString(),

	name: 'Untitled_unrevised',
	species: [
		{
			name: '狗',
			percent: 100,
		},
	],

	description: '数学魔法爱好者',

	owner: {
		name: 'Untitled_unrevised',
		href: 'https://space.bilibili.com/323748622',
	},
} satisfies Character;