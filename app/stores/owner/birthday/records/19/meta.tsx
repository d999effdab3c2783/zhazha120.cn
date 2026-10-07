import Extra from '~/stores/owner/birthday/records/19/components/extra.vue'
import type { OwnerBirthdayRecord } from '~/types/owner'

export default {
	renderExtra: () => {
		return <Extra />
	}
} as const satisfies OwnerBirthdayRecord