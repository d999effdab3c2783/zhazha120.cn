import type { FriendWebsite } from '~/types/friend'

import logo from '~/stores/friends/websites/me0w.org/assets/logo.bin?url'

export default {
	description: '喵🐱me0w, but furry wolf. 尝试变得毛茸茸',
	href: 'https://me0w.org',
	logo,
	name: 'Linked >> Blog'
} as const satisfies FriendWebsite