import type { FurryCharacter } from '~/types/furry'

import illustration from '~/stores/furry/characters/zhazha120-1/assets/illustration.bin?url'
import Extra from '~/stores/furry/characters/zhazha120-1/components/extra.vue'

export default {
	description: '其特点是腿部的闪电, 有蓝黄色的大以巴',

	illustrations: [illustration],

	name: '暂无名称',

	owner: {
		type: 'owner'
	},

	renderExtra: () => {
		return <Extra />
	},

	species: [
		{
			name: '狗',
			percent: 100
		}
	]
} as const satisfies FurryCharacter