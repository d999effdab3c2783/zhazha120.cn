<script setup lang="ts">
	import { useOwnerBirthdayRecords19DataStore } from '~/stores/owner/birthday/records/19/stores/data'

	const ownerBirthdayRecords19DataStore = useOwnerBirthdayRecords19DataStore()

	await ownerBirthdayRecords19DataStore.loadCongratulations()
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<sections-owner-birthday-records-custom-music :id="ownerBirthdayRecords19DataStore.music.id" />

		<sections-owner-birthday-records-custom-congratulations
			:items="ownerBirthdayRecords19DataStore.congratulations"
		/>

		<sections-owner-birthday-records-custom-render :items="ownerBirthdayRecords19DataStore.renderables" />
	</n-flex>
</template>