import type { FriendLink } from '@/data/friend_links';

export const remoteLogo = 'https://me0w.org/img/artwork.jpg';

export default {
	logo: new URL('assets/logo.bin', import.meta.url).toString(),
	name: 'Linked >> Blog',
	description: '喵🐱me0w, but furry wolf. 尝试变得毛茸茸',
	href: `https://me0w.org`,
} satisfies FriendLink;