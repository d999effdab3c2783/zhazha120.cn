import logo from '~/stores/friends/websites/langya.io/assets/logo.bin?url'
import type { FriendWebsite } from '~/types/friend'

export default {
	logo,
	name: 'LangYa466',
	href: 'https://langya.io?redirect={domain}'
} as const satisfies FriendWebsite