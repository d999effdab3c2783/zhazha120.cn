import type { Friend } from '~/types/friend'

import avatar from '~/stores/friends/entries/untitled_unrevised/assets/avatar.bin?url'

// @unocss-include

export default {
	avatar,
	contacts: [
		{
			href: 'https://space.bilibili.com/323748622',
			icon: 'i-simple-icons:bilibili',
			name: '哔哩哔哩'
		},
		{
			href: 'https://osu.ppy.sh/users/13094831',
			icon: 'i-arcticons:osu',
			name: 'osu!'
		}
	],
	description: '数学魔法爱好者',
	name: 'Untitled_unrevised'
} as const satisfies Friend