import illustration from '~/stores/furry/characters/zhazha120-1/assets/illustration.bin?url'
import type { FurryCharacter } from '~/types/furry'

export default {
	illustration,

	name: '暂无名称',
	species: [
		{
			name: '狗',
			percent: 100
		}
	],

	description: '其特点是腿部的闪电, 有蓝黄色的大以巴',

	owner: {
		name: '渣渣120',
		href: '/'
	}
} as const satisfies FurryCharacter