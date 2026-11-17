import type { Friend } from '~/types/friend'

import avatar from '~/stores/friends/entries/jacet/assets/avatar.bin?url'

// @unocss-include

export const qq = 2316807056

export default {
	avatar,
	contacts: [
		{
			href: 'https://space.bilibili.com/1752668024',
			icon: 'i-simple-icons:bilibili',
			name: '哔哩哔哩'
		},
		{
			href: 'https://osu.ppy.sh/users/39814431',
			icon: 'i-arcticons:osu',
			name: 'osu!'
		},
		{
			href: 'https://music.163.com/#/user/home?id=5121110447',
			icon: 'i-tabler:brand-netease-music',
			name: '网易云音乐'
		},
		{
			href: 'https://apexlegendsstatus.com/profile/PC/jacet114514',
			icon: 'i-arcticons:apex-legends',
			name: 'APEX Legends'
		},
		{
			href: 'https://v.douyin.com/UBj_ii7xrhU',
			icon: 'i-simple-icons:tiktok',
			name: '抖音'
		},
		{
			href: 'https://steamcommunity.com/profiles/76561199270667920',
			icon: 'i-simple-icons:steam',
			name: 'Steam'
		}
	],
	name: '澜星jacet'
} as const satisfies Friend