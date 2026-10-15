import type { Friend } from '~/types/friend'

// @unocss-include

export default {
	name: 'F0rge',

	contacts: [
		{
			icon: 'i-ant-design:qq-outlined',
			name: 'QQ',
			href: 'https://qm.qq.com/q/1mU1Z7hd8k',

			comment: '2111940399'
		}
	]
} as const satisfies Friend