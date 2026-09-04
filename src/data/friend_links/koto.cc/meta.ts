import type { FriendLink } from '@/data/friend_links'

export const remoteLogo = 'https://koto.cc/_assets/koto-cc-header_1024.b2W8i3OQ_Z1QNITL.webp'

export default {
	logo: new URL('assets/logo.bin', import.meta.url).toString(),
	name: "koto's site",
	description: 'koto 的灌水站',
	href: 'https://koto.cc'
} satisfies FriendLink