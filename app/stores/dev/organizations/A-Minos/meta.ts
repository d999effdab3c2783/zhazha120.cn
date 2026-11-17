import type { DevOrganization } from '~/types/dev'

import avatar from '~/stores/dev/organizations/A-Minos/assets/avatar.bin?url'

export default {
	avatar,
	name: 'A Minos',
	owner: 'A-Minos',
	type: 'github'
} as const satisfies DevOrganization