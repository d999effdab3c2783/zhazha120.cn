<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'
	import { isNil } from 'es-toolkit'
	import { computed } from 'vue'

	import { useFriendsStore } from '~/stores/friends'
	import { name as ownerName } from '~/stores/owner/information'
	import type { FurryCharacter } from '~/types/furry'
	import { filterArray } from '~/utils/filter'

	const props = defineProps<{
		readonly item: FurryCharacter
	}>()

	const friendsStore = useFriendsStore()

	const name = computed(() => {
		if (isNil(props.item.owner)) {
			return '?'
		}

		if (props.item.owner.type === 'owner') {
			return ownerName
		}

		if (props.item.owner.type === 'friend') {
			const filtered = filterArray(friendsStore.entries, `slug : ["${props.item.owner.slug}"]`)

			if (isNil(filtered) || filtered.length !== 1 || isNil(filtered[0])) {
				return '?'
			}

			return filtered[0].name
		}

		return '?'
	})

	const href = computed(() => {
		if (isNil(props.item.owner)) {
			return null
		}

		if (props.item.owner.type === 'owner') {
			return '/owner'
		}

		if (props.item.owner.type === 'friend') {
			return `/friends/${props.item.owner.slug}`
		}

		return null
	})

	if (isNotNil(props.item.owner) && props.item.owner.type === 'friend') {
		await friendsStore.loadEntries()
	}
</script>

<template>
	<template v-if="isNotNil(item.owner)">
		<n-flex
			align="center"
			justify="end"
			:size="0"
		>
			<n-text class="mr-1">所有者: </n-text>

			<template v-if="isNotNil(href)">
				<custom-redirect
					#="{ aProps, redirect }"
					:href="href"
				>
					<n-button
						tag="a"
						text
						type="primary"
						v-bind="aProps"
						@click.prevent="redirect"
					>
						{{ name }}
					</n-button>
				</custom-redirect>
			</template>

			<template v-else>
				<n-text type="info">{{ name }}</n-text>
			</template>
		</n-flex>
	</template>
</template>