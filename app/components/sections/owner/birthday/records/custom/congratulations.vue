<script setup lang="ts">
	import type { OwnerBirthdayCongratulation } from '~/types/owner'

	defineProps<{
		readonly items: OwnerBirthdayCongratulation[]
	}>()
</script>

<template>
	<n-card
		size="small"
		title="祝贺"
	>
		<n-flex
			vertical
			size="small"
			align="center"
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
		</n-flex>
	</n-card>
</template>