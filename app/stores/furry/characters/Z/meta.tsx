import type { FurryCharacter } from '~/types/furry'

import illustration from '~/stores/furry/characters/Z/assets/illustration.bin?url'
import Extra from '~/stores/furry/characters/Z/components/extra.vue'
import { name as ownerName } from '~/stores/owner/information'

export default {
	description: '头顶有着专属于 ' + ownerName + ' 的标识图案',

	illustrations: [illustration],

	name: 'Z',

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
	],

	species_alias: '折耳狗'
} as const satisfies FurryCharacter