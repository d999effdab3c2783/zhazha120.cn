import avatar from '~/stores/dev/organizations/FurryChatWorld/assets/avatar.bin?url'
import type { DevOrganization } from '~/types/dev'

export default {
	type: 'github',
	name: 'FurryChatWorld',

	avatar,
	owner: 'FurryChatWorld'
} as const satisfies DevOrganization