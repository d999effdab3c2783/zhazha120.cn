<script lang="ts" setup>
import { useZodRegistry } from '@/composables/database'
import { isDesktop, isMobile } from '@/shared/responsive'
import { isNonNullish } from 'remeda'
import { z } from 'zod'

defineOptions({
	name: 'SectionsGameTetrioOverlay'
})

const {
	0: url
} = useZodRegistry(
	z.object({
		'game.records.tetrio.overlay_url:0': z.string()
	})
)
</script>

<template>
	<template v-if="isNonNullish(url)">
		<iframe :class="{ 'h-260': isMobile, 'h-60': isDesktop }" :src="url" class="w-full border-none"/>
	</template>
</template>