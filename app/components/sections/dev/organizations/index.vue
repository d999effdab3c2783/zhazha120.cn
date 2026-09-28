<script setup lang="ts">
	import { isEqual } from 'es-toolkit'

	import { useDevStore } from '~/stores/dev'
	import type { ExternalDevOrganization, GithubDevOrganization } from '~/types/dev'

	const devStore = useDevStore()

	await devStore.loadOrganizations()
</script>

<template>
	<n-card
		size="small"
		title="加入的组织"
	>
		<n-flex
			align="center"
			size="small"
		>
			<template
				v-for="(item, index) in devStore.organizations"
				:key="index"
			>
				<template v-if="isEqual(item.type, 'github')">
					<sections-dev-organizations-github :item="item as GithubDevOrganization" />
				</template>

				<template v-if="isEqual(item.type, 'external')">
					<sections-dev-organizations-external :item="item as ExternalDevOrganization" />
				</template>
			</template>
		</n-flex>
	</n-card>
</template>