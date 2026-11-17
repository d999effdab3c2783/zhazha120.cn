<script setup lang="ts">
	import type { GithubDevOrganization } from '~/types/dev'

	import { computed } from 'vue'

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
				class="h-full"
				:src="item.avatar"
				@click.prevent.stop
			/>
		</template>
	</sections-dev-organizations-base>
</template>