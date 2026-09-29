import { parse } from '@filtron/core'
import { nestedAccessor, toFilter } from '@filtron/js'
import { isNil } from 'es-toolkit'
import type { UnknownRecord } from 'es-toolkit/types'
import { computed, toValue, watch, type MaybeRefOrGetter } from 'vue'
import { shallowRef } from 'vue'

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

		const parsed = parse(query.value)

		if (parsed.success) {
			const inputValue = toValue(input)
			const accessor = nestedAccessor('.')

			const filter = toFilter(parsed.ast, {
				fieldAccessor: (object, key) => {
					const value = accessor(object, key)

					if (Array.isArray(value)) {
						return value.join(' ')
					}

					return value
				}
			})

			console.log(parsed.ast)

			return inputValue.filter(item => {
				return filter(item)
			})
		}

		error.value = parsed.error

		return null
	})

	const output = computed(() => {
		if (isNil(filtered.value)) {
			return toValue(input)
		}

		return filtered.value
	})

	return {
		query,
		error,

		input,
		filtered,

		output
	}
}