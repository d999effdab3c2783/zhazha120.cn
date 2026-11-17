import type { FriendWebsite } from '~/types/friend'

import logo from '~/stores/friends/websites/langya.io/assets/logo.bin?url'

export default {
	href: 'https://langya.io?redirect={domain}',
	logo,
	name: 'LangYa466'
} as const satisfies FriendWebsite