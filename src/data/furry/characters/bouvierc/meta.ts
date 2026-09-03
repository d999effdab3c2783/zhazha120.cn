import type { Character } from '@/data/furry/characters';

export default {
	illustration: new URL('assets/illustration.bin', import.meta.url).toString(),

	name: 'BouvierC',
	species: [
		{
			name: '狼',
			percent: -1,
		},
		{
			name: '亚空间邪魔',
			percent: Number.NaN,
		},
	],

	species_alias: 'c酱 (?)',
	description: '这里是c酱, 不会画画不会音游',

	owner: {
		name: 'BouvierC',
		href: 'https://space.bilibili.com/384557759',
	},
} satisfies Character;