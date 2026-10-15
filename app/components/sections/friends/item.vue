<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'

	import type { FriendEntry } from '~/types/friend'

	defineProps<{
		readonly item: FriendEntry
	}>()
</script>

<template>
	<n-card
		class="h-full"
		size="small"
	>
		<n-flex
			class="h-full"
			size="small"
			vertical
		>
			<n-flex
				align="center"
				size="small"
			>
				<template v-if="isNotNil(item.avatar)">
					<n-image
						class="rounded size-20"
						:src="item.avatar"
					/>
				</template>

				<sections-friends-title :item="item" />
			</n-flex>

			<sections-friends-description :item="item" />

			<n-element class="mt-auto">
				<slot name="extra" />
			</n-element>
		</n-flex>
	</n-card>
</template>