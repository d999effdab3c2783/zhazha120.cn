import avatar from '~/stores/dev/organizations/PawTeamClub/assets/avatar.bin?url'
import type { DevOrganization } from '~/types/dev'

export default {
	type: 'github',
	name: 'Paw Team',

	avatar,
	owner: 'PawTeamClub'
} as const satisfies DevOrganization