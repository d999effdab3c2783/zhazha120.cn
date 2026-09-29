import avatar from '~/stores/dev/organizations/Endless-Spike-Studio/assets/avatar.webp?url'
import type { DevOrganization } from '~/types/dev'

export const remoteAvatar = 'https://avatars.githubusercontent.com/u/102524977'

export default {
	type: 'github',
	name: 'Endless Spike Studio',

	avatar,
	owner: 'Endless-Spike-Studio'
} as const satisfies DevOrganization