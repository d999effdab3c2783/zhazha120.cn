<script lang="ts" setup>
	import { isNotNil } from 'es-toolkit'
	import { computed } from 'vue'

	import { useFriendsStore } from '~/stores/friends'
	import { useFurryStore } from '~/stores/furry'
	import { filterArray } from '~/utils/filter'

	const props = defineProps<{
		readonly slug: string
	}>()

	const friendsStore = useFriendsStore()
	const furryStore = useFurryStore()

	const friend = computed(() => {
		return friendsStore.entries.find(item => {
			return item.slug === props.slug
		})
	})

	const furryCharacters = computed(() => {
		return filterArray(furryStore.characters, `owner.type = "friend" AND owner.slug : ["${props.slug}"]`)
	})

	await friendsStore.loadEntries()
	await furryStore.loadCharacters()
</script>

<template>
	<template v-if="isNotNil(friend)">
		<n-flex
			size="small"
			vertical
		>
			<sections-friends-item :item="friend" />
			<sections-friends-contacts :item="friend" />
			<sections-friends-game :item="friend" />

			<template v-if="isNotNil(furryCharacters) && furryCharacters.length > 0">
				<n-divider>福瑞 (Furry) | 设定集</n-divider>

				<sections-furry-characters-list :items="furryCharacters" />
			</template>
		</n-flex>
	</template>

	<template v-else>
		<n-card size="small">
			<n-empty />
		</n-card>
	</template>
</template>