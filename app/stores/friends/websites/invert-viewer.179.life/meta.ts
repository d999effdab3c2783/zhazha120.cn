import type { FriendWebsite } from '~/types/friend'

import logo from '~/stores/friends/websites/invert-viewer.179.life/assets/logo.bin?url'

export default {
	description: '致敬想象与创造力！',
	href: 'https://invert-viewer.179.life',
	logo,
	name: 'a small online lab'
} as const satisfies FriendWebsite