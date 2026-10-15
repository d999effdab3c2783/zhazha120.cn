import type { Friend } from '~/types/friend'

// @unocss-include

export default {
	name: 'awedwd',

	contacts: [
		{
			icon: 'i-simple-icons:bilibili',
			name: '哔哩哔哩',
			href: 'https://space.bilibili.com/432050496'
		}
	]
} as const satisfies Friend