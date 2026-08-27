import type { FriendLink } from '@/data/friend_links';

export const remoteLogo = 'https://blog.fqilin.top/img/avatar.png';

export default {
	logo: new URL('assets/logo.bin', import.meta.url).toString(),
	name: 'F_Qilin',
	href: 'https://blog.fqilin.top',
} satisfies FriendLink;