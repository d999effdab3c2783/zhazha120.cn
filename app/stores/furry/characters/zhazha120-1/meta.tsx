import illustration from '~/stores/furry/characters/zhazha120-1/assets/illustration.bin?url'
import Extra from '~/stores/furry/characters/zhazha120-1/components/extra.vue'
import { name as ownerName } from '~/stores/owner/information'
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
		name: ownerName,
		href: '/'
	},

	renderExtra: () => {
		return <Extra />
	}
} as const satisfies FurryCharacter