<script lang="ts" setup>
	const characters = useFurryCharacters();
</script>

<template>
	<custom-naive-ui-vertical-stack>
		<template v-for="(character, slug) in characters">
			<sections-furry-character-card :slug="slug" v-bind="character" />
		</template>
	</custom-naive-ui-vertical-stack>
</template>