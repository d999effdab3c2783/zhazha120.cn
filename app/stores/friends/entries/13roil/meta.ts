import type { Friend } from '~/types/friend'

import avatar from '~/stores/friends/entries/13roil/assets/avatar.bin?url'

// @unocss-include

export const qq = 65348094

export default {
	avatar,
	contacts: [
		{
			href: 'https://qm.qq.com/q/aRG9YrynmM',
			icon: 'i-ant-design:qq-outlined',
			name: 'QQ'
		},
		{
			href: 'https://www.douyin.com/user/MS4wLjABAAAA4oVSiVQCvIfrLq8pnQz_cAFsDPp5yX8fI7fRLR2rgug',
			icon: 'i-simple-icons:tiktok',
			name: '抖音'
		},
		{
			href: 'https://space.bilibili.com/333628058',
			icon: 'i-simple-icons:bilibili',
			name: '哔哩哔哩'
		},
		{
			href: 'https://osu.ppy.sh/users/6528747',
			icon: 'i-arcticons:osu',
			name: 'osu!'
		}
	],
	diving_fish_maimai_username: '13roil',
	name: 'ThirteenRoil'
} as const satisfies Friend