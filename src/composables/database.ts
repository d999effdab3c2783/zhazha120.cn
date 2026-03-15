import config from '@/config/database'
import Database from '@/database'
import { alova } from '@/shared/alova'
import type { RecordObject } from '@/types/shared'
import { decompressBlob, generateBlobURL } from '@/utils/blob'
import { refDefault, until, useStorage } from '@vueuse/core'
import { useObservable } from '@vueuse/rxjs'
import { liveQuery } from 'dexie'
import { isArray, isNonNullish, isNullish, isObjectType, isString } from 'remeda'
import { computed, ref, type Ref, watchEffect } from 'vue'
import { z, type ZodObject, type ZodType } from 'zod'

export const useDatabase = <T>(querier: (database: InstanceType<typeof Database>) => unknown, options: Partial<{
	readonly bypassInitializedCheck: boolean
}> = {}) => {
	const reference = ref<unknown>()

	const update = () => {
		useObservable<T>(
			// @ts-ignore
			liveQuery<T>(async () => {
				watchEffect(async () => {
					reference.value = await querier(Database.instance)
				})
			})
		)
	}

	if ( isNonNullish(options.bypassInitializedCheck) && options.bypassInitializedCheck ) {
		update()
	} else {
		until(Database.instance.ready).toBe(true)
			.then(async () => {
				update()
			})
	}

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

export const useDatabaseUpdater = () => {
	const cachedDatabaseETag = useStorage<string>('database.etag', null)
	const cachedDatabaseLastModified = useStorage<string>('database.last_modified', null)
	const cachedDatabaesContentLength = useStorage<string>('database.content_length', null)

	const skipUpdaterCounter = useStorage<number>('database.skip_updater_counter', 0)

	const hasData = useDatabase<boolean>(async database => {
		return await database.registry.count() > 0
	}, {
		bypassInitializedCheck: true
	})

	const canSkip = computed(() => {
		return skipUpdaterCounter.value < config.max_updater_skip_count
	})

	const check = async () => {
		await until(hasData).toMatch(isNonNullish)

		if ( !hasData.value ) {
			return true
		}

		const response = await alova.Head<Response>(config.production_database_url).send()

		if ( !response.ok ) {
			return false
		}

		const lastModified = response.headers.get('Last-Modified')
		const etag = response.headers.get('ETag')
		const contentLength = response.headers.get('Content-Length')

		return (
			lastModified !== cachedDatabaseLastModified.value ||
			etag !== cachedDatabaseETag.value ||
			contentLength !== cachedDatabaesContentLength.value
		)
	}

	const skip = async () => {
		skipUpdaterCounter.value += 1
	}

	const forceUpdate = async () => {
		await resetDatabase()
		await reset()

		location.reload()
	}

	const update = async () => {
		const response = await alova.Get<Response>(config.production_database_url).send()

		if ( !response.ok ) {
			return false
		}

		await reset()

		const lastModified = response.headers.get('Last-Modified')
		const etag = response.headers.get('ETag')
		const contentLength = response.headers.get('Content-Length')

		cachedDatabaseLastModified.value = lastModified
		cachedDatabaseETag.value = etag
		cachedDatabaesContentLength.value = contentLength

		await resetDatabase()

		const blob = await response.blob()
		const processed = await decompressBlob(blob, config.compression_format)

		await Database.instance.import(processed)
	}

	const resetDatabase = async () => {
		await Database.instance.delete()
		await Database.instance.open()
	}

	const reset = async () => {
		cachedDatabaseLastModified.value = null
		cachedDatabaseETag.value = null
		cachedDatabaesContentLength.value = null

		skipUpdaterCounter.value = 0
	}

	return {
		hasData,
		canSilentUpdate: hasData,
		check,
		skipUpdaterCounter,
		canSkip,
		skip,
		forceUpdate,
		update,
		resetDatabase,
		reset
	}
}