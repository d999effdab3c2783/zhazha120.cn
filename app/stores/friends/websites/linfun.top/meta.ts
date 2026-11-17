import type { FriendWebsite } from '~/types/friend'

import logo from '~/stores/friends/websites/linfun.top/assets/logo.bin?url'

export default {
	description: '-来点奇奇怪怪的- < )',
	href: 'https://linfun.top',
	logo,
	name: '是只林风呐'
} as const satisfies FriendWebsite