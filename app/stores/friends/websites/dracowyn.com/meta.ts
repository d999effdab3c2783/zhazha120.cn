import type { FriendWebsite } from '~/types/friend'

import logo from '~/stores/friends/websites/dracowyn.com/assets/logo.bin?url'

export default {
	description: '愿飞龙常入你梦乡',
	href: 'https://dracowyn.com',
	logo,
	name: 'Dracowyn'
} as const satisfies FriendWebsite