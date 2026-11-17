import type { UnknownRecord } from 'es-toolkit/types'
import type { MaybeRefOrGetter } from 'vue'

import { isNil } from 'es-toolkit'
import { computed, toValue, watch } from 'vue'
import { shallowRef } from 'vue'

import { filterArray } from '~/utils/filter'

export const useArrayFilter = <T extends UnknownRecord>(input: MaybeRefOrGetter<readonly T[]>) => {
	const query = shallowRef<string>()
	const error = shallowRef<string>()

	watch(query, () => {
		error.value = undefined
	})

	const filtered = computed(() => {
		if (isNil(query.value)) {
			return null
		}

		try {
			return filterArray(toValue(input), query.value)
		} catch (e) {
			if (e instanceof Error) {
				error.value = e.message
			}
		}

		return null
	})

	const output = computed(() => {
		if (isNil(filtered.value)) {
			return toValue(input)
		}

		return filtered.value
	})

	return {
		error,
		filtered,
		input,
		output,
		query
	}
}