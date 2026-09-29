import avatar from '~/stores/dev/organizations/A-Minos/assets/avatar.webp?url'
import type { DevOrganization } from '~/types/dev'

export const remoteAvatar = 'https://avatars.githubusercontent.com/u/168070538'

export default {
	type: 'github',
	name: 'A Minos',

	avatar,
	owner: 'A-Minos'
} as const satisfies DevOrganization