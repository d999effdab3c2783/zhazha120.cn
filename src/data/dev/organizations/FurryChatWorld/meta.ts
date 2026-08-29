import type { Organization } from '@/data/dev/organizations';

export const remoteAvatar = 'https://avatars.githubusercontent.com/u/180642546';

export default {
	type: 'github',
	name: 'Furry Chat World',

	avatar: new URL('assets/avatar.bin', import.meta.url).toString(),
	owner: 'FurryChatWorld',
} satisfies Organization;