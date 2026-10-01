import Component from '~/stores/utilities/qrcode/components/utility.vue'
import type { Utility } from '~/types/utility'

// @unocss-include

export default {
	icon: 'i-tabler:qrcode',
	name: '二维码',

	render: () => <Component />
} as const satisfies Utility