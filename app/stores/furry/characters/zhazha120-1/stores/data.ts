import { useNow } from '@vueuse/core'
import { differenceInYears, formatDistanceStrict } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import { defineStore } from 'pinia'
import { computed } from 'vue'

import assigns from '~/stores/furry/characters/zhazha120-1/stores/data/assigns'
import { birthday } from '~/stores/furry/characters/zhazha120-1/stores/data/informations'
import renderables from '~/stores/furry/characters/zhazha120-1/stores/data/renderables'
import type { FurryInformation } from '~/types/furry'

export const useFurryCharactersZhazha120_1DataStore = defineStore('furry.characters.zhazha120-1.data', () => {
	const now = useNow()

	const age = computed(() => {
		return differenceInYears(now.value, birthday)
	})

	const ago = computed(() => {
		return formatDistanceStrict(birthday, now.value, {
			addSuffix: true,
			locale: zhCN,
			unit: 'day',
			roundingMethod: 'floor'
		})
	})

	const informations = computed(() => {
		const birthdayString = birthday.toLocaleDateString()

		return [
			{
				name: '年龄',
				value: `${age.value}岁`
			},
			{
				name: '出生日期',
				value: `${birthdayString} (${ago.value})`
			}
		] as const satisfies FurryInformation[]
	})

	return {
		informations,
		assigns,
		renderables
	}
})