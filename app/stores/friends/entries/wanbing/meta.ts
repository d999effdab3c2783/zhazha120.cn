import type { Friend } from '~/types/friend'

// @unocss-include

export default {
	name: '豌冰',

	contacts: [
		{
			icon: 'i-simple-icons:bilibili',
			name: '哔哩哔哩',
			href: 'https://space.bilibili.com/519541121'
		}
	],

	diving_fish_maimai_username: 'wanbing'
} as const satisfies Friend