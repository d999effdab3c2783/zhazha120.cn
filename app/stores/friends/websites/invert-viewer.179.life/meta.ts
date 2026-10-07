import logo from '~/stores/friends/websites/invert-viewer.179.life/assets/logo.bin?url'
import type { FriendWebsite } from '~/types/friend'

export default {
	logo,
	name: 'a small online lab',
	description: '致敬想象与创造力！',
	href: 'https://invert-viewer.179.life'
} as const satisfies FriendWebsite