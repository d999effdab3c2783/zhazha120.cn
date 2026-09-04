import type { Organization } from '@/data/dev/organizations'

export const remoteAvatar = 'https://avatars.githubusercontent.com/u/168070538'

export default {
	type: 'github',
	name: 'A Minos',

	avatar: new URL('assets/avatar.bin', import.meta.url).toString(),
	owner: 'A-Minos'
} satisfies Organization