import type { FriendWebsite } from '~/types/friend'

import logo from '~/stores/friends/websites/sharpice.top/assets/logo.bin?url'

export default {
	description: '锐冰的个人博客',

	href: 'https://blog.sharpice.top',

	logo,

	name: '锐龙的小窝',

	tags: ['down', 'missing']
} as const satisfies FriendWebsite