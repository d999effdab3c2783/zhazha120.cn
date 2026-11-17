import type { Friend } from '~/types/friend'

import avatar from '~/stores/friends/entries/awedwd/assets/avatar.bin?url'

// @unocss-include

export default {
	avatar,
	contacts: [
		{
			href: 'https://space.bilibili.com/432050496',
			icon: 'i-simple-icons:bilibili',
			name: '哔哩哔哩'
		},
		{
			href: 'https://osu.ppy.sh/users/35614359',
			icon: 'i-arcticons:osu',
			name: 'osu!'
		}
	],
	description: '我是 awedwd, 欢迎扩列 uwu',
	name: 'awedwd'
} as const satisfies Friend