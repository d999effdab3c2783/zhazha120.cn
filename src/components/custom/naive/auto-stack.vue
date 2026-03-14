<script lang="ts" setup>
import { isMobile } from '@/shared/responsive'
import { NFlex } from 'naive-ui/lib'
import { computed } from 'vue'

defineOptions({
	name: 'CustomNaiveAutoStack'
})

const direction = computed(() => {
	if ( isMobile.value ) {
		return 'vertical'
	}

	return 'horizontal'
})
</script>

<template>
	<n-flex :vertical="(direction === 'vertical')" size="small" v-bind="$attrs">
		<slot/>
	</n-flex>
</template>