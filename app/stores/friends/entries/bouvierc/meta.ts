import avatar from '~/stores/friends/entries/bouvierc/assets/avatar.bin?url'
import type { Friend } from '~/types/friend'

// @unocss-include

export default {
	avatar,
	name: 'BouvierC',

	contacts: [
		{
			icon: 'i-simple-icons:bilibili',
			name: '哔哩哔哩',
			href: 'https://space.bilibili.com/384557759'
		},
		{
			icon: 'i-custom:huashijie',
			name: '画世界',
			href: 'https://www.huashijie.art/user/index/949117'
		}
	]
} as const satisfies Friend