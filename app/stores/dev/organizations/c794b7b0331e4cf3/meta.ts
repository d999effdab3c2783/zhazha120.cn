import avatar from '~/assets/images/dev/organizations/c794b7b0331e4cf3.webp?url'
import type { DevOrganization } from '~/types/dev'

export const remoteAvatar = 'https://avatars.githubusercontent.com/u/108103310'

export default {
	type: 'github',
	name: 'Z Team (c794b7b0331e4cf3)',

	avatar,
	owner: 'c794b7b0331e4cf3'
} as const satisfies DevOrganization