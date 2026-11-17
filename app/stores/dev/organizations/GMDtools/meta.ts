import type { DevOrganization } from '~/types/dev'

import avatar from '~/stores/dev/organizations/GMDtools/assets/avatar.bin?url'

export default {
	avatar,
	name: 'GDTools',
	owner: 'GMDtools',
	type: 'github'
} as const satisfies DevOrganization