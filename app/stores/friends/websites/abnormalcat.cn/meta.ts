import type { FriendWebsite } from '~/types/friend'

import logo from '~/stores/friends/websites/abnormalcat.cn/assets/logo.bin?url'

export default {
	href: 'https://abnormalcat.cn',
	logo,
	name: 'Abnormal Cat'
} as const satisfies FriendWebsite