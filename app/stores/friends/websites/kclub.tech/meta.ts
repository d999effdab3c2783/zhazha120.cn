import type { FriendWebsite } from '~/types/friend'

import logo from '~/stores/friends/websites/kclub.tech/assets/logo.bin?url'

export default {
	description: '感受编程乐趣，畅游代码海洋',
	href: 'https://blog.kclub.tech',
	logo,
	name: '迷失的小K'
} as const satisfies FriendWebsite