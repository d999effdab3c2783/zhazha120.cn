import type { Utility } from '@/data/utilities'

import Component from '@/components/sections/utilities/qrcode.vue'

// @unocss-include

export default {
	icon: 'i-tabler:qrcode',
	name: '二维码',

	render: () => {
		return h(Component)
	}
} satisfies Utility