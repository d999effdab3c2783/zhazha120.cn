import type { FriendLink } from '@/data/friend_links'

export const remoteLogo = 'https://blog.fmyron.com/img/avatar.png'

export default {
	logo: new URL('assets/logo.bin', import.meta.url).toString(),
	name: '洺渊的小窝',
	description: '过去已成过去，将来还是将来，而我们能改变的只有现在。',
	href: 'https://blog.fmyron.com'
} satisfies FriendLink