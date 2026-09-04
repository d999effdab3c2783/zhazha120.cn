import type { FriendLink } from '@/data/friend_links'

export const remoteLogo = 'https://cdn2.lnk.bi/profilepics/-2729436_20260510881.png'

export default {
	logo: new URL('assets/logo.bin', import.meta.url).toString(),
	name: "maobing's sanctuary",
	description: '我是小🐱',
	href: 'https://maobing-web-new.netlify.app'
} satisfies FriendLink