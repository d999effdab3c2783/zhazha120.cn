<script setup lang="ts">
	import type { FurryCharacter } from '~/types/furry'

	defineProps<{
		readonly item: FurryCharacter
	}>()
</script>

<template>
	<n-flex size="small">
		<template
			v-for="({ name, percent }, index) in item.species"
			:key="index"
		>
			<n-tag>{{ percent }}% {{ name }}</n-tag>
		</template>
	</n-flex>
</template>