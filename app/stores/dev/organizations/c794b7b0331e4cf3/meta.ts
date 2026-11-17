import type { DevOrganization } from '~/types/dev'

import avatar from '~/stores/dev/organizations/c794b7b0331e4cf3/assets/avatar.bin?url'

export default {
	avatar,
	name: 'Z Team (c794b7b0331e4cf3)',
	owner: 'c794b7b0331e4cf3',
	type: 'github'
} as const satisfies DevOrganization