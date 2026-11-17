import type { DevOrganization } from '~/types/dev'

import avatar from '~/stores/dev/organizations/Endless-Spike-Studio/assets/avatar.bin?url'

export default {
	avatar,
	name: 'Endless Spike Studio',
	owner: 'Endless-Spike-Studio',
	type: 'github'
} as const satisfies DevOrganization