import avatar from '~/stores/dev/organizations/Endless-Spike-Studio/assets/avatar.bin?url'
import type { DevOrganization } from '~/types/dev'

export default {
	type: 'github',
	name: 'Endless Spike Studio',

	avatar,
	owner: 'Endless-Spike-Studio'
} as const satisfies DevOrganization