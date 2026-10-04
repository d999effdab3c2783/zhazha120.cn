import { useNow } from '@vueuse/core'
import { differenceInYears, formatDistanceStrict } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import { defineStore } from 'pinia'
import { computed } from 'vue'

import assigns from '~/stores/furry/characters/Z/stores/data/assigns'
import buttons from '~/stores/furry/characters/Z/stores/data/buttons'
import { birthday, fursuitBirthday } from '~/stores/furry/characters/Z/stores/data/informations'
import renderables from '~/stores/furry/characters/Z/stores/data/renderables'
import type { FurryInformation } from '~/types/furry'

export const useFurryCharactersZDataStore = defineStore('furry.characters.Z.data', () => {
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

	const fursuitAgo = computed(() => {
		return formatDistanceStrict(fursuitBirthday, now.value, {
			addSuffix: true,
			locale: zhCN,
			unit: 'day',
			roundingMethod: 'floor'
		})
	})

	const informations = computed(() => {
		const birthdayString = birthday.toLocaleDateString()
		const fursuitBirthdayString = fursuitBirthday.toLocaleDateString()

		return [
			{
				name: '年龄',
				value: `${age.value}岁`
			},
			{
				name: '出生日期',
				value: `${birthdayString} (${ago.value})`
			},
			{
				name: '实体化日期',
				value: `${fursuitBirthdayString} (${fursuitAgo.value})`
			}
		] as const satisfies FurryInformation[]
	})

	return {
		informations,
		renderables,
		assigns,
		buttons
	}
})