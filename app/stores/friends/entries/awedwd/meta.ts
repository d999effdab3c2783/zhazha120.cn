import avatar from '~/stores/friends/entries/awedwd/assets/avatar.bin?url'
import type { Friend } from '~/types/friend'

// @unocss-include

export default {
	avatar,
	name: 'awedwd',

	description: '我是 awedwd, 欢迎扩列 uwu',

	contacts: [
		{
			icon: 'i-simple-icons:bilibili',
			name: '哔哩哔哩',
			href: 'https://space.bilibili.com/432050496'
		},
		{
			icon: 'i-arcticons:osu',
			name: 'osu!',
			href: 'https://osu.ppy.sh/users/35614359'
		}
	]
} as const satisfies Friend