<script lang="ts" setup>
	import { useRouteParams } from '@vueuse/router'
	import { isNonNullish } from 'remeda'

	definePage({
		meta: {
			title: '档案',
			layout: 'subpage'
		}
	})

	const characters = await useFurryCharacters()
	const slug = useRouteParams('slug', undefined, {
		mode: 'replace',
		transform: String
	})

	const character = computed(() => {
		return characters.find((item) => {
			return item.slug === slug.value
		})
	})
</script>

<template>
	<template v-if="isNonNullish(character)">
		<sections-furry-character-card v-bind="character" />
	</template>

	<template v-else>
		<n-card size="small">
			<n-empty />
		</n-card>
	</template>
</template>