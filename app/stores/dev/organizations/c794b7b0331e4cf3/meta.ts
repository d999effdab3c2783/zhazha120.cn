import avatar from '~/stores/dev/organizations/c794b7b0331e4cf3/assets/avatar.bin?url'
import type { DevOrganization } from '~/types/dev'

export default {
	type: 'github',
	name: 'Z Team (c794b7b0331e4cf3)',

	avatar,
	owner: 'c794b7b0331e4cf3'
} as const satisfies DevOrganization