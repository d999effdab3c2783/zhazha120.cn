import { cloneDeepWith, isString } from 'es-toolkit'
import { defineStore } from 'pinia'
import { computed, shallowRef } from 'vue'

import defaultCodetime from '~/stores/dev/codetime'
import competitions from '~/stores/dev/competitions'
import { title as notesTitle, items as notesItems } from '~/stores/dev/notes'
import projects from '~/stores/dev/projects'
import { useThemeStore } from '~/stores/theme'
import type { DevOrganization, DevStack } from '~/types/dev'

export const useDevStore = defineStore('dev', () => {
	const themeStore = useThemeStore()

	const stacks = shallowRef<DevStack[]>([])
	const organizations = shallowRef<DevOrganization[]>([])

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
		stacks.value = await Promise.all(
			Object.values(stacksGlob).map(async importer => {
				return await importer()
			})
		)
	}

	const organizationsGlob = import.meta.glob<DevOrganization>('~/stores/dev/organizations/*/meta.*', {
		import: 'default'
	})

	const loadOrganizations = async () => {
		organizations.value = await Promise.all(
			Object.values(organizationsGlob).map(async importer => {
				return await importer()
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