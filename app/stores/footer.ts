import { defineStore } from 'pinia'

import copyright from '~/stores/footer/copyright'
import filing from '~/stores/footer/filing'
import utility from '~/stores/footer/utility'
import version from '~/stores/footer/version'

export const useFooterStore = defineStore('footer', () => {
	return {
		copyright,
		filing,
		version,
		utility
	}
})