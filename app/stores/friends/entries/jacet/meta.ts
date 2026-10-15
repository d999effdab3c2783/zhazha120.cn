import type { Friend } from '~/types/friend'

// @unocss-include

export default {
	name: '澜星jacet',

	contacts: [
		{
			icon: 'i-simple-icons:bilibili',
			name: '哔哩哔哩',
			href: 'https://space.bilibili.com/1752668024'
		}
	]
} as const satisfies Friend