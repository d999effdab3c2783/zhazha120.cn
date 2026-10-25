import logo from '~/stores/friends/websites/cryflmind.com/assets/logo.bin?url'
import type { FriendWebsite } from '~/types/friend'

export default {
	logo,
	name: ['白风', '风信·白风', '风信·白风-Cryflmind', 'Cryflmind', '白风-Cryflmind', '白风猫猫'].join(' 或者 '),
	href: 'https://cryflmind.com',
	description: ['干员白风，向您报道！', '走自己的路，让别人说去吧！'].join('\n')
} as const satisfies FriendWebsite