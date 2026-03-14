import config from '@/config/database'
import Database from '@/database'
import { initialized } from '@/shared/global.ts'
import type { RecordObject } from '@/types/shared'
import { generateBlobURL } from '@/utils/blob'
import { refDefault, until } from '@vueuse/core'
import { useObservable } from '@vueuse/rxjs'
import { liveQuery } from 'dexie'
import { isArray, isNonNullish, isNullish, isObjectType, isString } from 'remeda'
import { ref, type Ref, watchEffect } from 'vue'
import { z, type ZodObject, type ZodType } from 'zod'

export const useDatabase = <T>(querier: (database: InstanceType<typeof Database>) => unknown) => {
	const reference = ref<unknown>()

	until(initialized).toBe(true)
		.then(() => {
			useObservable<T>(
				// @ts-ignore
				liveQuery<T>(async () => {
					watchEffect(async () => {
						reference.value = await querier(Database.instance)
					})
				})
			)
		})

	return reference as Readonly<
		Ref<T>
	>
}

export const useDatabaseValue = (data: unknown, property: string) => {
	const isRecord = (input: unknown): input is RecordObject => {
		return isNonNullish(input) && isObjectType(input) && !isArray(input)
	}

	if ( !isRecord(data) ) {
		return
	}

	if (
		property in data &&
		isNonNullish(data[property]) &&
		isString(data[property]) &&
		data[property].startsWith(config.reference_prefix)
	) {
		const referenceProperty = data[property].split(config.reference_prefix, 2)[1]

		return data[referenceProperty]
	}

	return data[property]
}

export const useDatabaseFile = (input: unknown) => {
	if ( input instanceof Blob ) {
		return generateBlobURL(input)
	}

	if ( isString(input) ) {
		return input
	}

	return
}

export const useHasRegistry = (pattern: string) => {
	const regexp = new RegExp('^' + pattern.replaceAll('.', '\\.')
		.replaceAll('*', '.*') + '$')

	return refDefault(useDatabase<boolean>(async database => {
		return (
			await database.registry.filter(item => {
				return isNonNullish(
					item.name.match(regexp)
				)
			}).toArray()
		).length > 0
	}), true)
}

export const useZodRegistry = <T extends ZodObject>(schema: T) => {
	return Object.fromEntries(
		Object.entries(schema.shape)
			.map(([key, type]: [string, ZodType]) => {
				return [
					key.includes(':') ? key.split(':', 2)[1] : key,
					useDatabase<unknown>(async database => {
						const realKey = key.includes(':') ? key.split(':', 2)[0] : key

						const item = await database.registry
							.where('name')
							.equals(realKey)
							.first()

						if ( isNullish(item) ) {
							return
						}

						const value = useDatabaseValue(item, 'value')

						if ( isNullish(value) ) {
							return
						}

						switch (type.description) {
							case 'file':
								if ( isNonNullish(value) ) {
									return useDatabaseFile(value)
								}
								break
							default:
								const parsed = type.safeParse(value)

								if ( isNullish(parsed) || !parsed.success ) {
									return
								}

								return parsed.data
						}
					})
				]
			})
	) as {
		[K in keyof T['shape'] as K extends string ? (K extends `${string}:${infer S}` ? S : K) : never]: Ref<z.infer<T['shape'][K]> | undefined>
	}
}