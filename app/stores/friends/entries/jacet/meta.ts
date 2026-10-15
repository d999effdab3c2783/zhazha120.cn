import type { Friend } from '~/types/friend'

// @unocss-include

const qq = 2316807056

export default {
	avatar: `https://thirdqq.qlogo.cn/g?b=qq&nk=${qq}&s=0`,
	name: '澜星jacet',

	contacts: [
		{
			icon: 'i-simple-icons:bilibili',
			name: '哔哩哔哩',
			href: 'https://space.bilibili.com/1752668024'
		},
		{
			icon: 'i-arcticons:osu',
			name: 'osu!',
			href: 'https://osu.ppy.sh/users/39814431'
		},
		{
			icon: 'i-tabler:brand-netease-music',
			name: '网易云音乐',
			href: 'https://music.163.com/#/user/home?id=5121110447'
		},
		{
			icon: 'i-arcticons:apex-legends',
			name: 'APEX Legends',
			href: 'https://apexlegendsstatus.com/profile/PC/jacet114514'
		},
		{
			icon: 'i-simple-icons:tiktok',
			name: '抖音',
			href: 'https://v.douyin.com/UBj_ii7xrhU'
		},
		{
			icon: 'i-simple-icons:steam',
			name: 'Steam',
			href: 'https://steamcommunity.com/profiles/76561199270667920'
		}
	]
} as const satisfies Friend