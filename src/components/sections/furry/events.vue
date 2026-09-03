<script lang="ts" setup>
	const events = useFurryEvents();
</script>

<template>
	<custom-naive-ui-vertical-stack>
		<template v-for="(character, slug) in events">
			<sections-furry-event-card :slug="slug" v-bind="character" />
		</template>
	</custom-naive-ui-vertical-stack>
</template>