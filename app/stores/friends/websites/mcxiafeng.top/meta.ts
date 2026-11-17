import type { FriendWebsite } from '~/types/friend'

import logo from '~/stores/friends/websites/mcxiafeng.top/assets/logo.bin?url'

export default {
	description: '一只会敲代码的笨笨猫咪xmx',
	href: 'https://blog.mcxiafeng.top',
	logo,
	name: '夏枫的猫窝w'
} as const satisfies FriendWebsite