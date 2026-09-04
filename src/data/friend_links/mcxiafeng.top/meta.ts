import type { FriendLink } from '@/data/friend_links'

export const remoteLogo = 'https://blog.mcxiafeng.top/images/avatar.webp'

export default {
	logo: new URL('assets/logo.bin', import.meta.url).toString(),
	name: '夏枫的猫窝w',
	description: '一只会敲代码的笨笨猫咪xmx',
	href: 'https://blog.mcxiafeng.top'
} satisfies FriendLink