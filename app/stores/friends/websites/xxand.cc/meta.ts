import type { FriendWebsite } from '~/types/friend'

import logo from '~/stores/friends/websites/xxand.cc/assets/logo.bin?url'

export default {
	description: '嘻嘻西西CC吸吸',
	href: 'https://xxand.cc',
	logo,
	name: '西西のBlog'
} as const satisfies FriendWebsite