<script lang="ts" setup>
	const characters = await useFurryCharacters();
</script>

<template>
	<custom-naive-ui-vertical-stack>
		<template v-for="character in characters">
			<sections-furry-character-card v-bind="character" />
		</template>
	</custom-naive-ui-vertical-stack>
</template>