import type { FriendLink } from '@/data/friend_links';

export const remoteLogo = 'https://blog.fmyron.com/img/sharpice.jpg'; // 借用

export default {
	status: 'dead',
	logo: new URL('assets/logo.bin', import.meta.url).toString(),
	name: '锐龙的小窝',
	description: '锐冰的个人博客',
	href: 'https://blog.sharpice.top',
} satisfies FriendLink;