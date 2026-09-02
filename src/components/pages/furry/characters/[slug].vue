<script lang="ts" setup>
	import { useRouteParams } from '@vueuse/router';
	import { isNonNullish } from 'remeda';

	definePage({
		meta: {
			title: '档案',
			layout: 'subpage',
		},
	});

	const characters = useFurryCharacters();
	const slug = useRouteParams('slug', undefined, {
		mode: 'replace',
		transform: String,
	});

	const character = computed(() => {
		return characters[slug.value];
	});
</script>

<template>
	<n-card size="small">
		<template v-if="isNonNullish(character)">
			<sections-furry-character-detail v-bind="character" />
		</template>

		<template v-else>
			<n-empty />
		</template>

		<template v-if="isNonNullish(character.owner)" #action>
			<sections-furry-character-owner v-bind="character" />
		</template>
	</n-card>
</template>