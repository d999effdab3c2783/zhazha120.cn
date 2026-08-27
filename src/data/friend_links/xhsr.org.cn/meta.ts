import type { FriendLink } from '@/data/friend_links';

export const remoteLogo = 'https://blog.xhsr.org.cn/wp-content/uploads/2025/12/fy-head.jpg';

export default {
	logo: new URL('assets/logo.bin', import.meta.url).toString(),
	name: '星鸿的博客',
	description: '享受获取新知带来的喜悦。',
	href: `https://blog.xhsr.org.cn`,
} satisfies FriendLink;