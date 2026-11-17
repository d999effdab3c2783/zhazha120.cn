import type { FriendWebsite } from '~/types/friend'

import logo from '~/stores/friends/websites/maobing.top/assets/logo.bin?url'

export default {
	description: '我是小🐱',
	href: 'https://maobing.top',
	logo,
	name: "maobing's sanctuary"
} as const satisfies FriendWebsite