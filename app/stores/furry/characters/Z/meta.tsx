import illustration from '~/stores/furry/characters/Z/assets/illustration.bin?url'
import Extra from '~/stores/furry/characters/Z/components/extra.vue'
import { name as ownerName } from '~/stores/owner/information'
import type { FurryCharacter } from '~/types/furry'

export default {
	illustration,

	name: 'Z',
	species: [
		{
			name: '狗',
			percent: 100
		}
	],

	species_alias: '折耳狗',
	description: '头顶有着专属于 ' + ownerName + ' 的标识图案',

	owner: {
		name: ownerName,
		href: '/'
	},

	renderExtra: () => {
		return <Extra />
	}
} as const satisfies FurryCharacter