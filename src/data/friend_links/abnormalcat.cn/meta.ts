import type { FriendLink } from '@/data/friend_links';

export const remoteLogo = 'https://abnormalcat.cn/_nuxt/avatar.CISg_1_-.png';

export default {
	logo: new URL('assets/logo.bin', import.meta.url).toString(),
	name: 'Abnormal Cat',
	href: 'https://abnormalcat.cn',
} satisfies FriendLink;