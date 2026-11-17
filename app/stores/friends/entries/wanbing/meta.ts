import type { Friend } from '~/types/friend'

import avatar from '~/stores/friends/entries/wanbing/assets/avatar.bin?url'

// @unocss-include

export const qq = 2669639312

export default {
	avatar,
	contacts: [
		{
			comment: qq.toString(),
			href: 'https://qm.qq.com/q/6s4pqWeIkE',
			icon: 'i-ant-design:qq-outlined',
			name: 'QQ'
		},
		{
			href: 'https://space.bilibili.com/519541121',
			icon: 'i-simple-icons:bilibili',
			name: '哔哩哔哩'
		}
	],
	description: '神秘的舞萌痴与 4k 痴, 食品科学锐意在读中',
	diving_fish_maimai_username: 'wanbing',
	name: '豌冰'
} as const satisfies Friend