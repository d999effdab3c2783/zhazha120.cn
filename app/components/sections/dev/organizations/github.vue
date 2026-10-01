<script setup lang="ts">
	import { computed } from 'vue'

	import type { GithubDevOrganization } from '~/types/dev'

	const props = defineProps<{
		readonly item: GithubDevOrganization
	}>()

	const href = computed(() => {
		return `https://github.com/orgs/${props.item.owner}`
	})
</script>

<template>
	<sections-dev-organizations-base
		:href="href"
		:item="item"
	>
		<template #icon>
			<n-image
				:src="item.avatar"
				@click.prevent.stop
			/>
		</template>
	</sections-dev-organizations-base>
</template>