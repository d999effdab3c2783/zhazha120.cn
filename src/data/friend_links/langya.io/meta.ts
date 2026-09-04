import type { FriendLink } from '@/data/friend_links'

export const remoteLogo = 'https://q1.qlogo.cn/g?b=qq&nk=3054086606&s=640'

export default {
	logo: new URL('assets/logo.bin', import.meta.url).toString(),
	name: 'LangYa466',
	href: 'https://langya.io?redirect={domain}'
} satisfies FriendLink