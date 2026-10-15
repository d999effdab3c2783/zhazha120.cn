import type { Friend } from '~/types/friend'

// @unocss-include

export default {
	name: 'Untitled_unrevised',

	contacts: [
		{
			icon: 'i-simple-icons:bilibili',
			name: '哔哩哔哩',
			href: 'https://space.bilibili.com/323748622'
		}
	]
} as const satisfies Friend