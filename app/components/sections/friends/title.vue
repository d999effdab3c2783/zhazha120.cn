<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'
	import { shallowRef } from 'vue'

	import type { FriendEntry } from '~/types/friend'

	defineProps<{
		readonly item: FriendEntry
	}>()

	const showSlug = shallowRef(false)
</script>

<template>
	<n-flex
		class="leading-none"
		:size="0"
		vertical
	>
		<n-text
			class="text-[1.6em] fw-black hover:cursor-help"
			@click="showSlug = !showSlug"
		>
			{{ item.name }}
		</n-text>

		<n-collapse-transition :show="isNotNil(item.slug) && showSlug">
			<n-text
				class="text-[.8em]"
				:depth="3"
			>
				{{ item.slug }}
			</n-text>
		</n-collapse-transition>
	</n-flex>
</template>