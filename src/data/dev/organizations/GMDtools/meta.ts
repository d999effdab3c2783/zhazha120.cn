import type { Organization } from '@/data/dev/organizations';

export const remoteAvatar = 'https://avatars.githubusercontent.com/u/298097181';

export default {
	type: 'github',
	name: 'GDTools',

	avatar: new URL('assets/avatar.bin', import.meta.url).toString(),
	owner: 'GMDtools',
} satisfies Organization;