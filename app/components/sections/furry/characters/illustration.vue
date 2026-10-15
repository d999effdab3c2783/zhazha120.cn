<script setup lang="ts">
	import type { FurryCharacter } from '~/types/furry'

	defineProps<{
		readonly item: FurryCharacter
	}>()
</script>

<template>
	<n-flex
		align="center"
		size="large"
		vertical
	>
		<n-carousel
			v-bind="
				item.illustrations.length > 1
					? {
							draggable: true,
							keyboard: true
						}
					: {}
			"
			centered-slides
			dot-type="line"
		>
			<template
				v-for="(illustrationItem, index) in item.illustrations"
				:key="index"
			>
				<n-image
					class="[&>img]:w-full"
					:src="illustrationItem"
				/>
			</template>
		</n-carousel>

		<n-text
			class="text-[.8em]"
			:depth="3"
		>
			仅供展示 不保证原图
		</n-text>
	</n-flex>
</template>