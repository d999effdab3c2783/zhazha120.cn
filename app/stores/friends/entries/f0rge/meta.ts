import type { Friend } from '~/types/friend'

import avatar from '~/stores/friends/entries/f0rge/assets/avatar.bin?url'

// @unocss-include

export default {
	avatar,
	contacts: [
		{
			comment: '2111940399',
			href: 'https://qm.qq.com/q/1mU1Z7hd8k',
			icon: 'i-ant-design:qq-outlined',
			name: 'QQ'
		},
		{
			href: 'https://music.163.com/#/user/home?id=1532629260',
			icon: 'i-tabler:brand-netease-music',
			name: '网易云音乐'
		},
		{
			href: 'https://space.bilibili.com/1877686494',
			icon: 'i-simple-icons:bilibili',
			name: '哔哩哔哩'
		}
	],
	description: '喜欢 sv 和叠键的臭猫',
	name: 'F0rge'
} as const satisfies Friend