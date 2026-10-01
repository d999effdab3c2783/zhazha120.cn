<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'

	import type { FurryCharacter } from '~/types/furry'

	defineProps<{
		readonly item: FurryCharacter
	}>()
</script>

<template>
	<template v-if="isNotNil(item.description)">
		<n-h4
			class="!mt-4"
			prefix="bar"
		>
			{{ item.description }}
		</n-h4>
	</template>
</template>