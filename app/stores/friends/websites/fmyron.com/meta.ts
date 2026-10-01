import logo from '~/stores/friends/websites/fmyron.com/assets/logo.bin?url'
import type { FriendWebsite } from '~/types/friend'

export default {
	logo,
	name: '洺渊的小窝',
	description: '过去已成过去，将来还是将来，而我们能改变的只有现在。',
	href: 'https://blog.fmyron.com'
} as const satisfies FriendWebsite