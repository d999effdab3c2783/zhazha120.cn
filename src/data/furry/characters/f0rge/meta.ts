import type { Character } from '@/data/furry/characters';

export default {
	illustration: new URL('assets/illustration.bin', import.meta.url).toString(),

	name: 'F0rge (無项)',
	species: [
		{
			name: '猫',
			percent: 80,
		},
		{
			name: '鱼',
			percent: 20,
		},
	],

	species_alias: '鱼尾猫',
	description: '喜欢 sv 和叠键的臭猫',

	owner: {
		name: 'F0rge',
		href: 'https://qm.qq.com/q/1mU1Z7hd8k',
	},
} satisfies Character;