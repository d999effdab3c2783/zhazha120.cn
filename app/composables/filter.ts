import { parse } from '@filtron/core'
import { toFilter } from '@filtron/js'
import { isNil, isNotNil, isPlainObject } from 'es-toolkit'
import { get } from 'es-toolkit/compat'
import type { UnknownRecord } from 'es-toolkit/types'
import { computed, toValue, watch, type MaybeRefOrGetter } from 'vue'
import { shallowRef } from 'vue'

const separator = '.'

const resolve = (item: unknown, remainKeys: string[]): string[] => {
	if (isNil(remainKeys[0])) {
		if (isNotNil(item)) {
			const itemString = String(item)

			return [itemString]
		}

		return []
	}

	if (Array.isArray(item)) {
		return item.flatMap(subItem => {
			return resolve(subItem, remainKeys)
		})
	}

	if (isNil(item) || !isPlainObject(item)) {
		return []
	}

	const next = get(item, remainKeys[0])
	const nextKeys = remainKeys.slice(1)

	if (isNil(next)) {
		return []
	}

	return resolve(next, nextKeys)
}

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

			const filter = toFilter(parsed.ast, {
				fieldAccessor: (object, key) => {
					const keys = key.split(separator)

					return resolve(object, keys).join(' ')
				}
			})

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