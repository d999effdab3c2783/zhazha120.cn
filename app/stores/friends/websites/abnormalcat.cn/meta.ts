import logo from '~/stores/friends/websites/abnormalcat.cn/assets/logo.bin?url'
import type { FriendWebsite } from '~/types/friend'

export default {
	logo,
	name: 'Abnormal Cat',
	href: 'https://abnormalcat.cn'
} as const satisfies FriendWebsite