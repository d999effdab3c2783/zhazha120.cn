import type { Friend } from '~/types/friend'

// @unocss-include

const qq = 2669639312

export default {
	avatar: `https://thirdqq.qlogo.cn/g?b=qq&nk=${qq}&s=0`,
	name: '豌冰',

	description: '神秘的舞萌痴与 4k 痴, 食品科学锐意在读中',

	contacts: [
		{
			icon: 'i-ant-design:qq-outlined',
			name: 'QQ',
			href: 'https://qm.qq.com/q/6s4pqWeIkE',

			comment: qq.toString()
		},
		{
			icon: 'i-simple-icons:bilibili',
			name: '哔哩哔哩',
			href: 'https://space.bilibili.com/519541121'
		}
	],

	diving_fish_maimai_username: 'wanbing'
} as const satisfies Friend