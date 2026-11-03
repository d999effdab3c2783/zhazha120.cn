import type { App } from 'vue'

import pinia from '@/app/shared/pinia'

export default (app: App) => {
	if (import.meta.env.SSR) {
		return
	}

	app.use(pinia)
}