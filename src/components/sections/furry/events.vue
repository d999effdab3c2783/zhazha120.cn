<script lang="ts" setup>
	const events = await useFurryEvents()
</script>

<template>
	<custom-naive-ui-vertical-stack>
		<template v-for="event in events">
			<sections-furry-event-card v-bind="event" />
		</template>
	</custom-naive-ui-vertical-stack>
</template>