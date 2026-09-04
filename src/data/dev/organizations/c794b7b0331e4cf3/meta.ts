import type { Organization } from '@/data/dev/organizations'

export const remoteAvatar = 'https://avatars.githubusercontent.com/u/108103310'

export default {
	type: 'github',
	name: 'Z Team (c794b7b0331e4cf3)',

	avatar: new URL('assets/avatar.bin', import.meta.url).toString(),
	owner: 'c794b7b0331e4cf3'
} satisfies Organization