<script lang="ts" setup>
	import type { SelectOption } from 'naive-ui'
	import { storeToRefs } from 'pinia'

	import { useResponsive } from '~/composables/responsive'
	import { useImageWatermarkToolStore } from '~/stores/tools'

	const imageWatermarkToolStore = useImageWatermarkToolStore()

	const { config } = storeToRefs(imageWatermarkToolStore)

	const { isMobile } = useResponsive()

	const fontStyles = [
		{
			label: '正常',
			value: 'normal'
		},
		{
			label: '斜体',
			value: 'italic'
		}
	] as const satisfies SelectOption[]

	const textAligns = [
		{
			label: '左对齐',
			value: 'left'
		},
		{
			label: '居中',
			value: 'center'
		},
		{
			label: '右对齐',
			value: 'right'
		}
	] as const satisfies SelectOption[]
</script>

<template>
	<n-flex
		justify="space-evenly"
		size="large"
		:vertical="isMobile"
	>
		<n-form-item label="内容">
			<n-input v-model:value="config.content" />
		</n-form-item>

		<n-form-item label="跨越边界显示">
			<n-switch v-model:value="config.cross" />
		</n-form-item>

		<n-form-item label="调试">
			<n-switch v-model:value="config.debug" />
		</n-form-item>

		<n-form-item label="字体大小">
			<n-input-number v-model:value="config.fontSize" />
		</n-form-item>

		<n-form-item label="字体">
			<n-input v-model:value="config.fontFamily" />
		</n-form-item>

		<n-form-item
			class="min-w-60"
			label="字体风格"
		>
			<n-select
				v-model:value="config.fontStyle"
				:options="fontStyles"
			/>
		</n-form-item>

		<n-form-item label="字型">
			<n-input v-model:value="config.fontVariant" />
		</n-form-item>

		<n-form-item label="字重">
			<n-input-number v-model:value="config.fontWeight" />
		</n-form-item>

		<n-form-item
			class="min-w-60"
			label="字体颜色"
		>
			<n-color-picker v-model:value="config.fontColor" />
		</n-form-item>

		<n-form-item label="全屏">
			<n-switch v-model:value="config.fullscreen" />
		</n-form-item>

		<n-form-item label="全局旋转">
			<n-input-number v-model:value="config.globalRotate" />
		</n-form-item>

		<n-form-item label="行高">
			<n-input-number v-model:value="config.lineHeight" />
		</n-form-item>

		<n-form-item label="高度">
			<n-input-number v-model:value="config.height" />
		</n-form-item>

		<n-form-item label="图片">
			<n-input v-model:value="config.image" />
		</n-form-item>

		<n-form-item label="图片高度">
			<n-input-number v-model:value="config.imageHeight" />
		</n-form-item>

		<n-form-item label="图片透明度">
			<n-input-number v-model:value="config.imageOpacity" />
		</n-form-item>

		<n-form-item label="图片宽度">
			<n-input-number v-model:value="config.imageWidth" />
		</n-form-item>

		<n-form-item label="旋转角度">
			<n-input-number v-model:value="config.rotate" />
		</n-form-item>

		<n-form-item label="被水印覆盖的内容是否可选中">
			<n-switch v-model:value="config.selectable" />
		</n-form-item>

		<n-form-item
			class="min-w-60"
			label="文本对齐方式"
		>
			<n-select
				v-model:value="config.textAlign"
				:options="textAligns"
			/>
		</n-form-item>

		<n-form-item label="宽度">
			<n-input-number v-model:value="config.width" />
		</n-form-item>

		<n-form-item label="X 轴间隔">
			<n-input-number v-model:value="config.xGap" />
		</n-form-item>

		<n-form-item label="X 轴偏移">
			<n-input-number v-model:value="config.xOffset" />
		</n-form-item>

		<n-form-item label="Y 轴间隔">
			<n-input-number v-model:value="config.yGap" />
		</n-form-item>

		<n-form-item label="Y 轴偏移">
			<n-input-number v-model:value="config.yOffset" />
		</n-form-item>

		<n-form-item label="Z 轴高度">
			<n-input-number v-model:value="config.zIndex" />
		</n-form-item>
	</n-flex>
</template>