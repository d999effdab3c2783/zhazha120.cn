import type { Friend } from '~/types/friend'

// @unocss-include

const qq = 65348094

export default {
	avatar: `https://thirdqq.qlogo.cn/g?b=qq&nk=${qq}&s=0`,
	name: 'ThirteenRoil',

	contacts: [
		{
			icon: 'i-ant-design:qq-outlined',
			name: 'QQ',
			href: 'https://qm.qq.com/q/aRG9YrynmM'
		},
		{
			icon: 'i-simple-icons:tiktok',
			name: '抖音',
			href: 'https://www.douyin.com/user/MS4wLjABAAAA4oVSiVQCvIfrLq8pnQz_cAFsDPp5yX8fI7fRLR2rgug'
		},
		{
			icon: 'i-simple-icons:bilibili',
			name: '哔哩哔哩',
			href: 'https://space.bilibili.com/333628058'
		},
		{
			icon: 'i-arcticons:osu',
			name: 'osu!',
			href: 'https://osu.ppy.sh/users/6528747'
		}
	],

	diving_fish_maimai_username: '13roil'
} as const satisfies Friend