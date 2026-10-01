import avatar from '~/stores/dev/organizations/26F-Studio/assets/avatar.bin?url'
import type { DevOrganization } from '~/types/dev'

export default {
	type: 'github',
	name: '26F Studio',

	avatar,
	owner: '26F-Studio'
} as const satisfies DevOrganization