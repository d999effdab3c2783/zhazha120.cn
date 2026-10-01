import avatar from '~/stores/dev/organizations/GMDtools/assets/avatar.bin?url'
import type { DevOrganization } from '~/types/dev'

export default {
	type: 'github',
	name: 'GDTools',

	avatar,
	owner: 'GMDtools'
} as const satisfies DevOrganization