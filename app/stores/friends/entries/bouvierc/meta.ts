import type { Friend } from '~/types/friend'

// @unocss-include

export default {
	name: 'BouvierC',

	contacts: [
		{
			icon: 'i-simple-icons:bilibili',
			name: '哔哩哔哩',
			href: 'https://space.bilibili.com/384557759'
		}
	]
} as const satisfies Friend