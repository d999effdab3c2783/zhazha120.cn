import type { Utility } from '~/types/utility'

// @unocss-include

export default {
	icon: 'i-tabler:qrcode',
	name: '二维码',

	render: () => <utilities-qrcode />
} as const satisfies Utility