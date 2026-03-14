<script lang="ts" setup>
import { NFlex } from 'naive-ui'

defineOptions({
	name: 'CustomNaiveHorizontalStack'
})
</script>

<template>
	<n-flex size="small" v-bind="$attrs">
		<slot/>
	</n-flex>
</template>