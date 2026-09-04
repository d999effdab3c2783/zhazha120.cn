import type { Character } from '@/data/furry/characters'

export default {
	illustration: new URL('assets/illustration.bin', import.meta.url).toString(),

	name: 'Z',
	species: [
		{
			name: '狗',
			percent: 100
		}
	],

	species_alias: '折耳狗',
	description: '头顶有着专属于渣渣的标识图案',

	owner: {
		name: '渣渣120',
		href: '/'
	}
} satisfies Character