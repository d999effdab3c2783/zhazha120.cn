import type { FriendWebsite } from '~/types/friend'

import logo from '~/stores/friends/websites/cryflmind.com/assets/logo.bin?url'

export default {
	description: ['干员白风，向您报道！', '走自己的路，让别人说去吧！'].join('\n'),
	href: 'https://cryflmind.com',
	logo,
	name: ['白风', '风信·白风', '风信·白风-Cryflmind', 'Cryflmind', '白风-Cryflmind', '白风猫猫', 'Cr9flm1nd'].join(
		' 或 '
	)
} as const satisfies FriendWebsite