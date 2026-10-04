<script setup lang="ts">
	import type { FurryInformation } from '~/types/furry'

	defineProps<{
		readonly items: FurryInformation[]
	}>()
</script>

<template>
	<n-card
		size="small"
		title="资料"
	>
		<n-flex
			:size="0"
			vertical
		>
			<n-divider class="!mt-0" />

			<template
				v-for="({ name, value }, index) in items"
				:key="index"
			>
				<n-text>{{ name }}:&nbsp;{{ value }}</n-text>
			</template>
		</n-flex>
	</n-card>
</template>