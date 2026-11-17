import type { FriendWebsite } from '~/types/friend'

import logo from '~/stores/friends/websites/koto.cc/assets/logo.bin?url'

export default {
	description: 'koto 的灌水站',
	href: 'https://koto.cc',
	logo,
	name: "koto's site"
} as const satisfies FriendWebsite