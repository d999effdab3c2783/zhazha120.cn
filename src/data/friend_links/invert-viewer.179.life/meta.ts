import type { FriendLink } from '@/data/friend_links';

export const remoteLogo = 'https://image.179.life/link/avatars/invert-viewer.webp';

export default {
	logo: new URL('assets/logo.bin', import.meta.url).toString(),
	name: 'a small online lab',
	description: '致敬想象与创造力！',
	href: 'https://invert-viewer.179.life',
} satisfies FriendLink;