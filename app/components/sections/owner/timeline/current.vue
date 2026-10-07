<script setup lang="ts">
	import { useNow } from '@vueuse/core'
	import { differenceInMilliseconds } from 'date-fns'
	import { computed } from 'vue'

	import { useOwnerStore } from '~/stores/owner'

	const ownerStore = useOwnerStore()

	const now = useNow()

	const diff = computed(() => {
		return String(differenceInMilliseconds(now.value, ownerStore.birthday.date) / 1000 / 60 / 60 / 24 / 365)
	})
</script>

<template>
	<n-card
		size="small"
		title="当前"
	>
		<n-flex
			align="baseline"
			class="!gap-.5"
			:size="0"
		>
			<n-text
				class="text-12"
				type="success"
			>
				{{ diff.split('.')[0] }}
			</n-text>

			<n-text
				class="text-6"
				:depth="3"
			>
				.
			</n-text>

			<n-text
				class="text-6"
				type="info"
			>
				{{ diff.split('.')[1] }}
			</n-text>
		</n-flex>
	</n-card>
</template>