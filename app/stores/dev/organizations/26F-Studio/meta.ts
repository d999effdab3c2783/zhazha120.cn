import type { DevOrganization } from '~/types/dev'

import avatar from '~/stores/dev/organizations/26F-Studio/assets/avatar.bin?url'

export default {
	avatar,
	name: '26F Studio',
	owner: '26F-Studio',
	type: 'github'
} as const satisfies DevOrganization