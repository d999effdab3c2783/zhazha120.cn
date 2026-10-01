import avatar from '~/stores/dev/organizations/A-Minos/assets/avatar.bin?url'
import type { DevOrganization } from '~/types/dev'

export default {
	type: 'github',
	name: 'A Minos',

	avatar,
	owner: 'A-Minos'
} as const satisfies DevOrganization