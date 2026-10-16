import avatar from '~/stores/friends/entries/f0rge/assets/avatar.bin?url'
import type { Friend } from '~/types/friend'

// @unocss-include

export default {
	avatar,
	name: 'F0rge',

	description: '喜欢 sv 和叠键的臭猫',

	contacts: [
		{
			icon: 'i-ant-design:qq-outlined',
			name: 'QQ',
			href: 'https://qm.qq.com/q/1mU1Z7hd8k',

			comment: '2111940399'
		},
		{
			icon: 'i-tabler:brand-netease-music',
			name: '网易云音乐',
			href: 'https://music.163.com/#/user/home?id=1532629260'
		},
		{
			icon: 'i-simple-icons:bilibili',
			name: '哔哩哔哩',
			href: 'https://space.bilibili.com/1877686494'
		}
	]
} as const satisfies Friend