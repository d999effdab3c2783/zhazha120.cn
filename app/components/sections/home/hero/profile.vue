<script setup lang="ts">
	import { useOwnerStore } from '~/stores/owner'

	const ownerStore = useOwnerStore()
</script>

<template>
	<n-flex
		align="center"
		justify="center"
		size="small"
	>
		<n-avatar
			circle
			class="size-24 select-none transition-(duration-1000 ease-in-out property-transform) hover:(cursor-help transform-rotate-360)"
			:src="ownerStore.avatar"
			@dblclick="ownerStore.handlePoke"
		/>

		<n-text
			class="text-12 fw-black font-[v-zhazha120-script] select-none transition-(duration-500 ease-in-out property-text-shadow) hover:(text-shadow-[0_0_.6em] cursor-default)"
		>
			{{ ownerStore.name }}
		</n-text>
	</n-flex>
</template>