<script setup lang="tsx">
	import { useRouteParams } from '@vueuse/router'
	import { isNotNil } from 'es-toolkit'
	import { computed } from 'vue'

	import { definePageMeta } from '#app/composables/pages'
	import { useOwnerStore } from '~/stores/owner'
	import { filterArray } from '~/utils/filter'

	definePageMeta({
		layout: 'subpage',
		title: '生日记录'
	})

	const age = useRouteParams('age', null, {
		mode: 'push',
		transform: Number
	})

	const ownerStore = useOwnerStore()

	const extra = computed(() => {
		if (age.value < 0) {
			return <sections-owner-birthday-records-unborn />
		}

		if (age.value >= 120) {
			return <sections-owner-birthday-records-deceased />
		}

		const records = filterArray(ownerStore.birthday.records, `age : ["${age.value}"]`)

		if (isNotNil(records) && records.length === 1 && isNotNil(records[0])) {
			return records[0].renderExtra()
		}

		return <sections-owner-birthday-records-empty />
	})

	await ownerStore.loadBirthdayRecords()
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<template v-if="!isNaN(age)">
			<n-card size="small">
				<n-element class="utils__center--grid">
					<n-text class="text-[3em]">{{ age }} 岁</n-text>
				</n-element>
			</n-card>

			<n-divider />

			<component :is="extra" />
		</template>

		<template v-else>
			<n-card size="small">
				<n-empty />
			</n-card>
		</template>
	</n-flex>
</template>

<style scoped lang="scss">
	@use '~/styles/utils';
</style>