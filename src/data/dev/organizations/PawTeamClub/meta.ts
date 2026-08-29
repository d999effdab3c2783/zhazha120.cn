import type { Organization } from '@/data/dev/organizations';

export const remoteAvatar = 'https://avatars.githubusercontent.com/u/156998119';

export default {
	type: 'github',
	name: 'Paw Team',

	avatar: new URL('assets/avatar.bin', import.meta.url).toString(),
	owner: 'PawTeamClub',
} satisfies Organization;