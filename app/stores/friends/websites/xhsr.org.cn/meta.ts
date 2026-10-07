import logo from '~/stores/friends/websites/xhsr.org.cn/assets/logo.bin?url'
import type { FriendWebsite } from '~/types/friend'

export default {
	logo,
	name: '星鸿的博客',
	description: '享受获取新知带来的喜悦。',
	href: 'https://blog.xhsr.org.cn'
} as const satisfies FriendWebsite