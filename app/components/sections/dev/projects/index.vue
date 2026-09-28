<script setup lang="ts">
	import { isEqual } from 'es-toolkit'

	import { useDevStore } from '~/stores/dev'
	import type { ExternalDevProject, GithubDevProject } from '~/types/dev'

	const devStore = useDevStore()
</script>

<template>
	<n-card
		size="small"
		title="做过的项目"
	>
		<n-flex
			align="center"
			size="small"
		>
			<template
				v-for="(item, index) in devStore.projects"
				:key="index"
			>
				<template v-if="isEqual(item.type, 'github')">
					<sections-dev-projects-github :item="item as GithubDevProject" />
				</template>

				<template v-if="isEqual(item.type, 'external')">
					<sections-dev-projects-external :item="item as ExternalDevProject" />
				</template>
			</template>
		</n-flex>
	</n-card>
</template>