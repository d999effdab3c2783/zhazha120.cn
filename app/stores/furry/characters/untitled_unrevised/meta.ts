import illustration from '~/stores/furry/characters/untitled_unrevised/assets/illustration.bin?url'
import type { FurryCharacter } from '~/types/furry'

export default {
	illustration,

	name: 'Untitled_unrevised',
	species: [
		{
			name: '狗',
			percent: 100
		}
	],

	description: '数学魔法爱好者',

	owner: {
		name: 'Untitled_unrevised',
		href: 'https://space.bilibili.com/323748622'
	}
} as const satisfies FurryCharacter