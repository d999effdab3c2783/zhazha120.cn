import avatar from '~/stores/dev/organizations/GMDtools/assets/avatar.webp?url'
import type { DevOrganization } from '~/types/dev'

export const remoteAvatar = 'https://avatars.githubusercontent.com/u/298097181'

export default {
	type: 'github',
	name: 'GDTools',

	avatar,
	owner: 'GMDtools'
} as const satisfies DevOrganization