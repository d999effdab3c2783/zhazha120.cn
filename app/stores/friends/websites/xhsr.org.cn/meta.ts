import type { FriendWebsite } from '~/types/friend'

import logo from '~/stores/friends/websites/xhsr.org.cn/assets/logo.bin?url'

export default {
	description: '享受获取新知带来的喜悦。',
	href: 'https://blog.xhsr.org.cn',
	logo,
	name: '星鸿的博客'
} as const satisfies FriendWebsite