import type { Organization } from '@/data/dev/organizations';

export const remoteAvatar = 'https://avatars.githubusercontent.com/u/72001477';

export default {
	type: 'github',
	name: '26F Studio',

	avatar: new URL('assets/avatar.bin', import.meta.url).toString(),
	owner: '26F-Studio',
} satisfies Organization;