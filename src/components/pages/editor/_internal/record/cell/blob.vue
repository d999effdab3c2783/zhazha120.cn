<script lang="ts" setup>
import CustomRedirect from '@/components/custom/redirect.vue'
import { generateBlobURL } from '@/utils/blob'
import { NFlex, NImage, NText } from 'naive-ui'
import { computed } from 'vue'

const props = defineProps<{
	readonly value: Blob | File
}>()

const name = computed(() => {
	if ( props.value instanceof File ) {
		return props.value.name
	}

	return url.value
})

const url = computed(() => {
	return generateBlobURL(props.value)
})
</script>

<template>
	<n-flex align="center" size="small">
		<template v-if="value.type.startsWith('image')">
			<n-image :src="url" class="size-12"/>
		</template>

		<n-flex :size="0" vertical>
			<custom-redirect :href="url">
				<n-text type="primary">{{ name }}</n-text>
			</custom-redirect>

			<n-text :depth="3" class="text-sm">{{ value.type }}</n-text>
			<n-text :depth="3" class="text-sm">{{ value.size }} 字节</n-text>
		</n-flex>
	</n-flex>
</template>