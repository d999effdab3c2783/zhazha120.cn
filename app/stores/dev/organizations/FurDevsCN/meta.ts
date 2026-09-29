import avatar from '~/stores/dev/organizations/FurDevsCN/assets/avatar.webp?url'
import type { DevOrganization } from '~/types/dev'

export const remoteAvatar = 'https://avatars.githubusercontent.com/u/103052241'

export default {
	type: 'github',
	name: 'FurDevsCN',

	avatar,
	owner: 'FurDevsCN'
} as const satisfies DevOrganization