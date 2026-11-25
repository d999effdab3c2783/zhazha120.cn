import type { FriendWebsite } from '~/types/friend'

import logo from '~/stores/friends/websites/fenrisowo.github.io/assets/logo.bin?url'

export default {
	href: 'https://fenrisowo.github.io',
	logo,
	name: '苍陨的博客'
} as const satisfies FriendWebsite