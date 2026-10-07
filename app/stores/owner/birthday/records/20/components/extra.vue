<script setup lang="ts">
	import { useOwnerBirthdayRecords20DataStore } from '~/stores/owner/birthday/records/20/stores/data'

	const ownerBirthdayRecords20DataStore = useOwnerBirthdayRecords20DataStore()

	await ownerBirthdayRecords20DataStore.loadCongratulations()
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<sections-owner-birthday-records-custom-music :id="ownerBirthdayRecords20DataStore.music.id" />

		<sections-owner-birthday-records-custom-congratulations
			:items="ownerBirthdayRecords20DataStore.congratulations"
		/>

		<sections-owner-birthday-records-custom-render :items="ownerBirthdayRecords20DataStore.renderables" />
	</n-flex>
</template>