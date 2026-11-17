import type { OwnerBirthdayRecord } from '~/types/owner'

import Extra from '~/stores/owner/birthday/records/19/components/extra.vue'

export default {
	renderExtra: () => {
		return <Extra />
	}
} as const satisfies OwnerBirthdayRecord