<script lang="tsx" setup>
	import { isNotNil } from 'es-toolkit'
	import { computed } from 'vue'

	import { useOwnerStore } from '~/stores/owner'

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

		const record = ownerStore.birthday.records.find(item => {
			return Number(item.age) === props.age
		})

		if (isNotNil(record)) {
			return record.renderExtra()
		}

		return <sections-owner-birthday-records-empty />
	})

	ownerStore.loadBirthdayRecords()
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