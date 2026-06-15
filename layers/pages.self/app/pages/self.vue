<script setup lang="ts">
	definePageMeta({
		layout: "subpage",
		name: "本体",
	});
</script>

<template>
	<n-flex vertical size="small" inline class="w-full">
		<SectionsSelfDescription />

		<n-card title="找到我" size="small">
			<SectionsSelfContacts />
		</n-card>

		<n-card title="探索我" size="small">
			<SectionsSelfDiscover />
		</n-card>
	</n-flex>
</template>