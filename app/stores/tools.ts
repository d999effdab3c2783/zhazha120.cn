import type { WatermarkProps } from 'naive-ui'
import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

import { name as ownerName } from '~/stores/owner/information'
import portals from '~/stores/tools/portals'

export const useToolsStore = defineStore('tools', () => {
	return {
		portals
	}
})

export const useImageWatermarkToolStore = defineStore('tools.image_watermark', () => {
	const file = shallowRef<Blob>()

	const config = shallowRef<Partial<WatermarkProps>>({
		content: ownerName,
		cross: true,
		fontColor: 'rgba(128, 128, 128, .3)',
		fontSize: 20,
		fontWeight: 900,
		globalRotate: -15,
		height: 24,
		lineHeight: 10,
		textAlign: 'center',
		width: 154,
		yOffset: 10
	})

	return {
		file,
		config
	}
})