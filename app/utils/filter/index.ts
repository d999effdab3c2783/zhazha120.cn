import { parseOrThrow, FiltronParseError } from '@filtron/core'
import { toFilter } from '@filtron/js'
import { isNil, isNotNil, isPlainObject } from 'es-toolkit'
import { get } from 'es-toolkit/compat'
import type { UnknownRecord } from 'es-toolkit/types'

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

export const filterArray = <T extends UnknownRecord>(input: readonly T[], query: string): T[] | null => {
	if (query.trim() === '') {
		return null
	}

	try {
		const parsed = parseOrThrow(query)
		const filter = toFilter(parsed, {
			fieldAccessor: (object, key) => {
				const keys = key.split(separator)

				return resolve(object, keys).join(' ')
			}
		})

		return input.filter(item => {
			return filter(item)
		})
	} catch (e) {
		if (e instanceof FiltronParseError) {
			throw new Error(e.message, {
				cause: e
			})
		}

		return null
	}
}