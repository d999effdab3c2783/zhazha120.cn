import { cloneDeep, isPlainObject, isString } from 'es-toolkit'
import type { UnknownRecord } from 'es-toolkit/types'
import { defineStore } from 'pinia'
import { computed, shallowRef } from 'vue'

import defaultCodetime from '~/stores/dev/codetime'
import competitions from '~/stores/dev/competitions'
import projects from '~/stores/dev/projects'
import { useThemeStore } from '~/stores/theme'
import type { DevOrganization, DevStack } from '~/types/dev'

export const useDevStore = defineStore('dev', () => {
	const themeStore = useThemeStore()

	const stacks = shallowRef<DevStack[]>([])
	const organizations = shallowRef<DevOrganization[]>([])

	const replaceCodetime = <T>(input: T): T => {
		if (isString(input)) {
			// @ts-ignore
			return input.replaceAll('{theme}', themeStore.actualMode)
		}

		if (Array.isArray(input)) {
			// @ts-ignore
			return input.map(item => {
				return replaceCodetime(item)
			})
		}

		if (isPlainObject(input)) {
			const cloned: UnknownRecord = cloneDeep(input)

			for (const key in cloned) {
				cloned[key] = replaceCodetime(cloned[key])
			}

			// @ts-ignore
			return cloned
		}

		return input
	}

	const codetime = computed(() => {
		return replaceCodetime(defaultCodetime)
	})

	const loadStacks = async () => {
		await Promise.all(
			Object.values(
				import.meta.glob<DevStack>('~/stores/dev/stacks/*', {
					import: 'default'
				})
			).map(async importer => {
				stacks.value.push(await importer())
			})
		)
	}

	const loadOrganizations = async () => {
		await Promise.all(
			Object.values(
				import.meta.glob<DevOrganization>('~/stores/dev/organizations/*/meta.*', {
					import: 'default'
				})
			).map(async importer => {
				organizations.value.push(await importer())
			})
		)
	}

	return {
		codetime,
		stacks,
		organizations,
		projects,
		competitions,

		loadStacks,
		loadOrganizations
	}
})