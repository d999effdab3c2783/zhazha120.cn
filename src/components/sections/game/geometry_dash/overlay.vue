<script lang="ts" setup>
import { useZodRegistry } from '@/composables/database'
import { isNonNullish } from 'remeda'
import { z } from 'zod'

defineOptions({
	name: 'SectionsGameGeometryDashOverlay'
})

const {
	0: url
} = useZodRegistry(
	z.object({
		'game.records.geometry_dash.overlay_url:0': z.string()
	})
)
</script>

<template>
	<template v-if="isNonNullish(url)">
		<iframe :src="url" class="w-full h-240 border-none"/>
	</template>
</template>