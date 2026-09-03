import type { Character } from '@/data/furry/characters';

export default {
	illustration: new URL('assets/illustration.bin', import.meta.url).toString(),

	name: '暂无名称',
	species: [
		{
			name: '狗',
			percent: 100,
		},
	],

	description: '其特点是腿部的闪电, 有蓝黄色的大以巴',

	owner: {
		name: '渣渣120',
		href: '/',
	},
} satisfies Character;