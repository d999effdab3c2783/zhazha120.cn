import avatar from '~/stores/friends/entries/untitled_unrevised/assets/avatar.bin?url'
import type { Friend } from '~/types/friend'

// @unocss-include

export default {
	avatar,
	name: 'Untitled_unrevised',

	description: '数学魔法爱好者',

	contacts: [
		{
			icon: 'i-simple-icons:bilibili',
			name: '哔哩哔哩',
			href: 'https://space.bilibili.com/323748622'
		},
		{
			icon: 'i-arcticons:osu',
			name: 'osu!',
			href: 'https://osu.ppy.sh/users/13094831'
		}
	]
} as const satisfies Friend