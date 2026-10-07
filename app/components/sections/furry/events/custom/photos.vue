<script setup lang="ts">
	import type { FurryEventPhoto } from '~/types/furry'

	defineProps<{
		readonly items: FurryEventPhoto[]
	}>()
</script>

<template>
	<n-card
		size="small"
		title="一些返图"
	>
		<n-flex
			align="center"
			size="small"
			vertical
		>
			<n-image-group>
				<template
					v-for="({ src }, index) in items"
					:key="index"
				>
					<n-image
						class="[&>img]:w-full"
						:src="src"
					/>
				</template>
			</n-image-group>

			<n-text :depth="3">仅供展示 不保证原图</n-text>
		</n-flex>
	</n-card>
</template>