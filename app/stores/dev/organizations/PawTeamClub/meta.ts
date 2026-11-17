import type { DevOrganization } from '~/types/dev'

import avatar from '~/stores/dev/organizations/PawTeamClub/assets/avatar.bin?url'

export default {
	avatar,
	name: 'Paw Team',
	owner: 'PawTeamClub',
	type: 'github'
} as const satisfies DevOrganization