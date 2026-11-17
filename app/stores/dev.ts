import type { DevOrganization, DevStack } from '~/types/dev'

import { cloneDeepWith, isString, once } from 'es-toolkit'
import { defineStore } from 'pinia'
import { computed, shallowReactive } from 'vue'

import defaultCodetime from '~/stores/dev/codetime'
import competitions from '~/stores/dev/competitions'
import { items as notesItems, title as notesTitle } from '~/stores/dev/notes'
import projects from '~/stores/dev/projects'
import { useThemeStore } from '~/stores/theme'

export const useDevStore = defineStore('dev', () => {
	const themeStore = useThemeStore()

	const stacks = shallowReactive<DevStack[]>([])
	const organizations = shallowReactive<DevOrganization[]>([])

	const codetime = computed(() => {
		return cloneDeepWith(defaultCodetime, value => {
			if (isString(value)) {
				return value.replaceAll('{theme}', themeStore.actualMode)
			}

			return undefined
		})
	})

	const stacksGlob = import.meta.glob<DevStack>('~/stores/dev/stacks/*', {
		import: 'default'
	})

	const loadStacks = once(async () => {
		await Promise.all(
			Object.values(stacksGlob).map(async importer => {
				const imported = await importer()

				stacks.push(imported)
			})
		)
	})

	const organizationsGlob = import.meta.glob<DevOrganization>('~/stores/dev/organizations/*/meta.*', {
		import: 'default'
	})

	const loadOrganizations = once(async () => {
		await Promise.all(
			Object.values(organizationsGlob).map(async importer => {
				const imported = await importer()

				organizations.push(imported)
			})
		)
	})

	return {
		codetime,

		competitions,

		loadOrganizations,

		loadStacks,

		notes: {
			items: notesItems,
			title: notesTitle
		},

		organizations,

		organizationsGlob,

		projects,

		stacks,

		stacksGlob
	}
})