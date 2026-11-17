import type { DevOrganization } from '~/types/dev'

import avatar from '~/stores/dev/organizations/FurryChatWorld/assets/avatar.bin?url'

export default {
	avatar,
	name: 'FurryChatWorld',
	owner: 'FurryChatWorld',
	type: 'github'
} as const satisfies DevOrganization