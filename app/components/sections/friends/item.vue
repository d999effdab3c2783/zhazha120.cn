<script setup lang="ts">
	import { clsx } from 'clsx'
	import { isNil } from 'es-toolkit'
	import { computed } from 'vue'

	import { useResponsive } from '~/composables/responsive'
	import type { FriendEntry } from '~/types/friend'

	const props = defineProps<{
		readonly item: FriendEntry
	}>()

	const { isMobile } = useResponsive()

	const informationClassNames = computed(() => {
		if (isNil(props.item.avatar)) {
			return null
		}

		return clsx(
			{
				'mt-4': isMobile.value
			},
			{
				'ml-2': !isMobile.value
			}
		)
	})
</script>

<template>
	<n-card size="small">
		<n-flex
			size="small"
			vertical
		>
			<n-flex
				class="pl-2 flex-1 size-full"
				:class="informationClassNames"
				size="small"
				vertical
			>
				<sections-friends-title :item="item" />
				<sections-friends-description :item="item" />
			</n-flex>

			<slot name="extra" />
		</n-flex>
	</n-card>
</template>