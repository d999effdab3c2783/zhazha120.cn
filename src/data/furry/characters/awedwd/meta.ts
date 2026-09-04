import type { Character } from '@/data/furry/characters'

export default {
	illustration: new URL('assets/illustration.bin', import.meta.url).toString(),

	name: 'awedwd',
	species: [
		{
			name: '狗',
			percent: 100
		},
		{
			name: '笨蛋',
			percent: 120
		},
		{
			name: '紫薯',
			percent: 50
		},
		{
			name: '芋头',
			percent: 50
		}
	],

	species_alias: '狼犬',
	description: '我是 awedwd, 欢迎扩列 uwu',

	owner: {
		name: 'awedwd',
		href: 'https://space.bilibili.com/432050496'
	}
} satisfies Character