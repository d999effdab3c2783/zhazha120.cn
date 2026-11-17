import type { OwnerBirthdayRecord } from '~/types/owner'

import Extra from '~/stores/owner/birthday/records/20/components/extra.vue'

export default {
	renderExtra: () => {
		return <Extra />
	}
} as const satisfies OwnerBirthdayRecord