<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'

	import type { Friend } from '~/types/friend'

	defineProps<{
		readonly item: Friend
	}>()
</script>

<template>
	<template v-if="isNotNil(item.description)">
		<n-h4
			class="box-border !mb-0 !mt-4"
			prefix="bar"
		>
			{{ item.description }}
		</n-h4>
	</template>
</template>