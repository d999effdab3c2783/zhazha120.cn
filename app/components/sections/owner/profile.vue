<script setup lang="ts">
	import { useOwnerStore } from '~/stores/owner'

	const ownerStore = useOwnerStore()
</script>

<template>
	<n-card size="small">
		<n-flex
			align="center"
			size="small"
		>
			<n-avatar
				circle
				class="size-18 select-none transition-(duration-1000 ease-in-out property-transform) hover:(cursor-help transform-rotate-360)"
				:src="ownerStore.avatar"
				@dblclick="ownerStore.handlePoke"
			/>

			<n-text class="text-9 fw-black font-[v-zhazha120-script]">
				{{ ownerStore.name }}
			</n-text>
		</n-flex>
	</n-card>
</template>