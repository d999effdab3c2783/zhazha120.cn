<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'

	import type { FurryCharacterEntry } from '~/types/furry'

	defineProps<{
		readonly item: FurryCharacterEntry
	}>()
</script>

<template>
	<n-card size="small">
		<n-split
			:default-size="0.2"
			direction="horizontal"
		>
			<template #1>
				<sections-furry-characters-illustration :item="item" />
			</template>

			<template #2>
				<n-flex
					class="pl-2 flex-1 size-full"
					size="small"
					vertical
				>
					<sections-furry-characters-title :item="item" />
					<sections-furry-characters-species :item="item" />
					<sections-furry-characters-description :item="item" />

					<slot name="extra" />
				</n-flex>
			</template>
		</n-split>

		<template
			v-if="isNotNil(item.owner)"
			#action
		>
			<sections-furry-characters-owner :item="item" />
		</template>
	</n-card>
</template>