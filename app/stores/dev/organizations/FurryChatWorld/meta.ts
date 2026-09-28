import avatar from '~/assets/images/dev/organizations/FurryChatWorld.webp?url'
import type { DevOrganization } from '~/types/dev'

export const remoteAvatar = 'https://avatars.githubusercontent.com/u/180642546'

export default {
	type: 'github',
	name: 'FurryChatWorld',

	avatar,
	owner: 'FurryChatWorld'
} as const satisfies DevOrganization