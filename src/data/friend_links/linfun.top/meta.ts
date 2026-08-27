import type { FriendLink } from '@/data/friend_links';

export const remoteLogo = 'https://img.linfun.top/imgapp/CxDragon-big-heade.png';

export default {
	logo: new URL('assets/logo.bin', import.meta.url).toString(),
	name: '是只林风呐',
	description: '-来点奇奇怪怪的- < )',
	href: 'https://linfun.top',
} satisfies FriendLink;