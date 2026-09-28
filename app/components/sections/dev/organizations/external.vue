<script setup lang="ts">
	import type { ExternalDevOrganization } from '~/types/dev'

	defineProps<{
		readonly item: ExternalDevOrganization
	}>()
</script>

<template>
	<sections-dev-organizations-base
		:href="item.href"
		:item="item"
	>
		<template #icon>
			<n-icon class="i-ant-design:link-outlined" />
		</template>
	</sections-dev-organizations-base>
</template>