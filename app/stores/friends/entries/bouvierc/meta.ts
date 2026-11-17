import type { Friend } from '~/types/friend'

import avatar from '~/stores/friends/entries/bouvierc/assets/avatar.bin?url'

// @unocss-include

export default {
	avatar,
	contacts: [
		{
			href: 'https://space.bilibili.com/384557759',
			icon: 'i-simple-icons:bilibili',
			name: '哔哩哔哩'
		},
		{
			href: 'https://www.huashijie.art/user/index/949117',
			icon: 'i-custom:huashijie',
			name: '画世界'
		}
	],
	description: '这里是c酱, 不会画画不会音游',
	name: 'BouvierC'
} as const satisfies Friend