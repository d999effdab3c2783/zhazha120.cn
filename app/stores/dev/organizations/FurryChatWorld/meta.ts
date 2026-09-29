import avatar from '~/stores/dev/organizations/FurryChatWorld/assets/avatar.webp?url'
import type { DevOrganization } from '~/types/dev'

export const remoteAvatar = 'https://avatars.githubusercontent.com/u/180642546'

export default {
	type: 'github',
	name: 'FurryChatWorld',

	avatar,
	owner: 'FurryChatWorld'
} as const satisfies DevOrganization