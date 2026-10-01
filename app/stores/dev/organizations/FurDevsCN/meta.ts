import avatar from '~/stores/dev/organizations/FurDevsCN/assets/avatar.bin?url'
import type { DevOrganization } from '~/types/dev'

export default {
	type: 'github',
	name: 'FurDevsCN',

	avatar,
	owner: 'FurDevsCN'
} as const satisfies DevOrganization