import type { FriendWebsite } from '~/types/friend'

import logo from '~/stores/friends/websites/fqilin.top/assets/logo.bin?url'

export default {
	href: 'https://blog.fqilin.top',
	logo,
	name: 'F_Qilin'
} as const satisfies FriendWebsite