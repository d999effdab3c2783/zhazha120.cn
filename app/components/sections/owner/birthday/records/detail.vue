<script lang="tsx" setup>
	import { isNotNil } from 'es-toolkit'
	import { computed } from 'vue'

	import { useOwnerStore } from '~/stores/owner'
	import { filterArray } from '~/utils/filter'

	const props = defineProps<{
		readonly age: number
	}>()

	const ownerStore = useOwnerStore()

	const extra = computed(() => {
		if (props.age < 0) {
			return <sections-owner-birthday-records-unborn />
		}

		if (props.age >= 120) {
			return <sections-owner-birthday-records-deceased />
		}

		const records = filterArray(ownerStore.birthday.records, `age : ["${props.age}"]`)

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

<style lang="scss" scoped>
	@use '~/styles/utils';
</style>