import avatar from '~/assets/images/dev/organizations/PawTeamClub.webp?url'
import type { DevOrganization } from '~/types/dev'

export const remoteAvatar = 'https://avatars.githubusercontent.com/u/156998119'

export default {
	type: 'github',
	name: 'Paw Team',

	avatar,
	owner: 'PawTeamClub'
} as const satisfies DevOrganization