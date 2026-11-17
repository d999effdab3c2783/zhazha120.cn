import type { DevOrganization } from '~/types/dev'

import avatar from '~/stores/dev/organizations/FurDevsCN/assets/avatar.bin?url'

export default {
	avatar,
	name: 'FurDevsCN',
	owner: 'FurDevsCN',
	type: 'github'
} as const satisfies DevOrganization