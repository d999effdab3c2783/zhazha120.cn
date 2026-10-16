import { cloneDeepWith, isString } from 'es-toolkit'
import { defineStore } from 'pinia'
import { computed, shallowReactive } from 'vue'

import defaultCodetime from '~/stores/dev/codetime'
import competitions from '~/stores/dev/competitions'
import { title as notesTitle, items as notesItems } from '~/stores/dev/notes'
import projects from '~/stores/dev/projects'
import { useThemeStore } from '~/stores/theme'
import type { DevOrganization, DevStack } from '~/types/dev'

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

	const loadStacks = async () => {
		stacks.splice(0, stacks.length)

		await Promise.all(
			Object.values(stacksGlob).map(async importer => {
				const imported = await importer()

				stacks.push(imported)
			})
		)
	}

	const organizationsGlob = import.meta.glob<DevOrganization>('~/stores/dev/organizations/*/meta.*', {
		import: 'default'
	})

	const loadOrganizations = async () => {
		organizations.splice(0, organizations.length)

		await Promise.all(
			Object.values(organizationsGlob).map(async importer => {
				const imported = await importer()

				organizations.push(imported)
			})
		)
	}

	return {
		notes: {
			title: notesTitle,
			items: notesItems
		},

		codetime,
		stacks,
		organizations,
		projects,
		competitions,

		stacksGlob,
		loadStacks,

		organizationsGlob,
		loadOrganizations
	}
})