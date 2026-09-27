import { defineStore } from 'pinia'

import channels from '~/stores/support/channels'

export const useSupportStore = defineStore('support', () => {
	return {
		channels
	}
})