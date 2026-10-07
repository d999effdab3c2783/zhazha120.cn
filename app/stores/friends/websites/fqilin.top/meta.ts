import logo from '~/stores/friends/websites/fqilin.top/assets/logo.bin?url'
import type { FriendWebsite } from '~/types/friend'

export default {
	logo,
	name: 'F_Qilin',
	href: 'https://blog.fqilin.top'
} as const satisfies FriendWebsite