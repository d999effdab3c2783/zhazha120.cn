import type { Friend } from '~/types/friend'

// @unocss-include

export default {
	name: 'ThirteenRoil',

	contacts: [
		{
			icon: 'i-arcticons:osu',
			name: 'osu!',
			href: 'https://osu.ppy.sh/users/6528747'
		}
	]
} as const satisfies Friend