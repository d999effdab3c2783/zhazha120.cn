import type { Organization } from '@/data/dev/organizations'

export const remoteAvatar = 'https://avatars.githubusercontent.com/u/103052241'

export default {
	type: 'github',
	name: 'FurDevsCN',

	avatar: new URL('assets/avatar.bin', import.meta.url).toString(),
	owner: 'FurDevsCN'
} satisfies Organization