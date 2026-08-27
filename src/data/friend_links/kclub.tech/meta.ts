import type { FriendLink } from '@/data/friend_links';

export const remoteLogo = 'https://kclub-phost-1313107835.cos.ap-nanjing.myqcloud.com/Phost/smallkid/working.webp';

export default {
	logo: new URL('assets/logo.bin', import.meta.url).toString(),
	name: '迷失的小K',
	description: '感受编程乐趣，畅游代码海洋',
	href: 'https://blog.kclub.tech',
} satisfies FriendLink;