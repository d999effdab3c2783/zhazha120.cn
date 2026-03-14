<script lang="ts" setup>
import CustomNaiveVerticalStack from '@/components/custom/naive/vertical-stack.vue'
import { NIcon, NText } from 'naive-ui'
</script>

<template>
	<custom-naive-vertical-stack align="center">
		<n-icon class="size-12 i-ant-design:upload-outlined"/>
		<n-text>点击或者拖动文件到该区域来上传</n-text>
	</custom-naive-vertical-stack>
</template>