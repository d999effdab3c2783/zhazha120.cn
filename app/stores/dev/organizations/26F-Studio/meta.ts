import avatar from '~/stores/dev/organizations/26F-Studio/assets/avatar.webp?url'
import type { DevOrganization } from '~/types/dev'

export const remoteAvatar = 'https://avatars.githubusercontent.com/u/72001477'

export default {
	type: 'github',
	name: '26F Studio',

	avatar,
	owner: '26F-Studio'
} as const satisfies DevOrganization