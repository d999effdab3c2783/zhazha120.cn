import logo from '~/stores/friends/websites/mcxiafeng.top/assets/logo.bin?url'
import type { FriendWebsite } from '~/types/friend'

export default {
	logo,
	name: '夏枫的猫窝w',
	description: '一只会敲代码的笨笨猫咪xmx',
	href: 'https://blog.mcxiafeng.top'
} as const satisfies FriendWebsite