<script lang="ts" setup>
import CustomMarkdown from '@/components/custom/markdown/index.vue'
import CustomNaiveButton from '@/components/custom/naive/button.vue'
import CustomNaiveModalWrapper from '@/components/custom/naive/modal-wrapper.vue'

defineProps<{
	readonly value: string
	readonly show: boolean
}>()
</script>

<template>
	<template v-if="show">
		<custom-markdown :raw="value"/>
	</template>

	<template v-else>
		<custom-naive-modal-wrapper preset="card" size="small" title="预览">
			<template #trigger="{ toggle }">
				<custom-naive-button size="small" @click="toggle">预览</custom-naive-button>
			</template>

			<custom-markdown :raw="value"/>
		</custom-naive-modal-wrapper>
	</template>
</template>

<style lang="scss">
@use '@/styles/zhazha120';
</style>