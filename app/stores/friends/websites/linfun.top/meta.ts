import logo from '~/stores/friends/websites/linfun.top/assets/logo.bin?url'
import type { FriendWebsite } from '~/types/friend'

export default {
	logo,
	name: '是只林风呐',
	description: '-来点奇奇怪怪的- < )',
	href: 'https://linfun.top'
} as const satisfies FriendWebsite