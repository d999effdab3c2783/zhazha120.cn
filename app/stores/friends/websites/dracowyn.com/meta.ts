import logo from '~/stores/friends/websites/dracowyn.com/assets/logo.bin?url'
import type { FriendWebsite } from '~/types/friend'

export default {
	logo,
	name: 'Dracowyn',
	description: '愿飞龙常入你梦乡',
	href: 'https://dracowyn.com'
} as const satisfies FriendWebsite