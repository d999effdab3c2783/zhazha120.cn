<script lang="ts" setup>
import { NFlex } from 'naive-ui'

defineOptions({
	name: 'CustomNaiveVerticalStack'
})
</script>

<template>
	<n-flex size="small" v-bind="$attrs" vertical>
		<slot/>
	</n-flex>
</template>