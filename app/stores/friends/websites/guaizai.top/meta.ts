import type { FriendWebsite } from '~/types/friend'

import logo from '~/stores/friends/websites/guaizai.top/assets/logo.bin?url'

export default {
	description: 'Tech inspires~!',
	href: 'https://blog.guaizai.top',
	logo,
	name: "GuaiZai's blog"
} as const satisfies FriendWebsite