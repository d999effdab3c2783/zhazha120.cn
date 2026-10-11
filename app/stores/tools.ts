import { isNil, sumBy } from 'es-toolkit'
import { get } from 'es-toolkit/compat'
import type { WatermarkProps } from 'naive-ui'
import { defineStore } from 'pinia'
import { computed, ref, shallowRef } from 'vue'

import { name as ownerName } from '~/stores/owner/information'
import portals from '~/stores/tools/portals'
import type { KeyAccuracyCalculatorData, KeyAccuracyCalculatorPreset } from '~/types/tool'

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

export const useKeyAccuracyCalculatorToolStore = defineStore('tools.key_accuracy_calculator', () => {
	const presets = shallowRef<KeyAccuracyCalculatorPreset[]>([])

	const data = ref<KeyAccuracyCalculatorData>({
		name: '',
		maps: [],
		require_accuracy: 0
	})

	const inputs = shallowRef<Record<number, number>>({})

	const totalNotes = computed(() => {
		if (isNil(data)) {
			return 0
		}

		return sumBy(data.value.maps, item => {
			return item.notes
		})
	})

	const result = computed(() => {
		const calculated: number[] = []

		for (let i = 0; i < data.value.maps.length; i++) {
			const currentMap = data.value.maps[i]

			if (isNil(currentMap)) {
				continue
			}

			const currentInput = currentMap.accuracy

			if (isNil(currentInput)) {
				break
			}

			if (i === 0) {
				calculated.push(currentInput)
				continue
			}

			const prevMap = data.value.maps[i - 1]

			if (isNil(prevMap)) {
				continue
			}

			const prevInput = prevMap.accuracy

			if (isNil(prevInput)) {
				continue
			}

			const currentNotes = sumBy(data.value.maps.slice(0, i + 1), item => {
				return item.notes
			})

			const prevNotes = sumBy(data.value.maps.slice(0, i), item => {
				return item.notes
			})

			const currentAccuracy = (currentInput * currentNotes - prevInput * prevNotes) / currentMap.notes

			calculated.push(currentAccuracy)
		}

		return calculated
	})

	const valid = computed(() => {
		return result.value.length === data.value.maps.length
	})

	const passed = computed(() => {
		return get(data.value.maps.at(-1), 'accuracy', -1) >= data.value.require_accuracy
	})

	const passedDiff = computed(() => {
		return data.value.require_accuracy - get(data.value.maps.at(-1), 'accuracy', -1)
	})

	const loadPresets = async () => {
		presets.value = await Promise.all(
			Object.values(
				import.meta.glob<KeyAccuracyCalculatorPreset>(
					[
						'!~/stores/tools/key-accuracy-calculator/presets/_schema.json',
						'~/stores/tools/key-accuracy-calculator/presets/*.json'
					],
					{
						import: 'default'
					}
				)
			).map(async importer => {
				return await importer()
			})
		)
	}

	return {
		presets,
		data,
		inputs,

		totalNotes,
		result,
		valid,
		passed,
		passedDiff,

		loadPresets
	}
})