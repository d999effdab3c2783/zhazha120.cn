import type { Utility } from '~/types/utility'

import Component from '~/stores/utilities/dev.assets/components/utility.vue'

// @unocss-include

export default {
	icon: 'i-material-symbols:work-update-outline',
	name: '资源',

	render: () => <Component />
} as const satisfies Utility