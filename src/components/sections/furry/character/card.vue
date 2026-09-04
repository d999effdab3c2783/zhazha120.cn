<script lang="ts" setup>
	import { isNonNullish } from 'remeda'

	import type { CharacterEntry } from '@/data/furry/characters'

	defineProps<CharacterEntry>()
</script>

<template>
	<n-card size="small">
		<sections-furry-character-detail v-bind="$props" />

		<template v-if="isNonNullish(owner)" #action>
			<sections-furry-character-owner v-bind="$props" />
		</template>
	</n-card>
</template>