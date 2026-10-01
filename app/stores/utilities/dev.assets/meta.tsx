import Component from '~/stores/utilities/dev.assets/components/utility.vue'
import type { Utility } from '~/types/utility'

// @unocss-include

export default {
	icon: 'i-material-symbols:work-update-outline',
	name: '资源',

	render: () => <Component />
} as const satisfies Utility