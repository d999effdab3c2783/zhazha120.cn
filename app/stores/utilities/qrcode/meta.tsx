import type { Utility } from '~/types/utility'

import Component from '~/stores/utilities/qrcode/components/utility.vue'

// @unocss-include

export default {
	icon: 'i-tabler:qrcode',
	name: '二维码',

	render: () => <Component />
} as const satisfies Utility