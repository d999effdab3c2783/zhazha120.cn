<script lang="ts" setup>
import SectionsSelfDescription from '@/components/sections/self/description.vue'
import { useZodRegistry } from '@/composables/database'
import { z } from 'zod'

defineOptions({
	name: 'SectionsHomeTabsSelfDescription'
})

const {
	0: show_in_home
} = useZodRegistry(
	z.object({
		'self.description.show_in_home:0': z.boolean()
			.default(false)
	})
)
</script>

<template>
	<template v-if="show_in_home">
		<sections-self-description/>
	</template>
</template>