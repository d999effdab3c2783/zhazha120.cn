import type { Organization } from '@/data/dev/organizations'

export const remoteAvatar = 'https://avatars.githubusercontent.com/u/102524977'

export default {
	type: 'github',
	name: 'Endless Spike Studio',

	avatar: new URL('assets/avatar.bin', import.meta.url).toString(),
	owner: 'Endless-Spike-Studio'
} satisfies Organization