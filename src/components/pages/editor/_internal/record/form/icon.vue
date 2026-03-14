<script lang="ts" setup>
import { NFlex, NIcon, NInput } from 'naive-ui'

defineProps<{
	readonly value: string
}>()

const emits = defineEmits<{
	(event: 'update:value', value: string): void
}>()

const handleUpdateValue = async (newValue: string) => {
	emits('update:value', newValue)
}
</script>

<template>
	<n-flex :wrap="false" align="center" size="small">
		<n-icon :class="value" class="size-12"/>
		<n-input :value="value" @update:value="handleUpdateValue"/>
	</n-flex>
</template>