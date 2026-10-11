<script lang="ts" setup>
	import type { SelectOption } from 'naive-ui'

	import { useResponsive } from '~/composables/responsive'
	import { useImageWatermarkToolStore } from '~/stores/tools'

	const imageWatermarkToolStore = useImageWatermarkToolStore()

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
			<n-input v-model:value="imageWatermarkToolStore.config.content" />
		</n-form-item>

		<n-form-item label="跨越边界显示">
			<n-switch v-model:value="imageWatermarkToolStore.config.cross" />
		</n-form-item>

		<n-form-item label="调试">
			<n-switch v-model:value="imageWatermarkToolStore.config.debug" />
		</n-form-item>

		<n-form-item label="字体大小">
			<n-input-number v-model:value="imageWatermarkToolStore.config.fontSize" />
		</n-form-item>

		<n-form-item label="字体">
			<n-input v-model:value="imageWatermarkToolStore.config.fontFamily" />
		</n-form-item>

		<n-form-item
			class="min-w-60"
			label="字体风格"
		>
			<n-select
				v-model:value="imageWatermarkToolStore.config.fontStyle"
				:options="fontStyles"
			/>
		</n-form-item>

		<n-form-item label="字型">
			<n-input v-model:value="imageWatermarkToolStore.config.fontVariant" />
		</n-form-item>

		<n-form-item label="字重">
			<n-input-number v-model:value="imageWatermarkToolStore.config.fontWeight" />
		</n-form-item>

		<n-form-item
			class="min-w-60"
			label="字体颜色"
		>
			<n-color-picker v-model:value="imageWatermarkToolStore.config.fontColor" />
		</n-form-item>

		<n-form-item label="全屏">
			<n-switch v-model:value="imageWatermarkToolStore.config.fullscreen" />
		</n-form-item>

		<n-form-item label="全局旋转">
			<n-input-number v-model:value="imageWatermarkToolStore.config.globalRotate" />
		</n-form-item>

		<n-form-item label="行高">
			<n-input-number v-model:value="imageWatermarkToolStore.config.lineHeight" />
		</n-form-item>

		<n-form-item label="高度">
			<n-input-number v-model:value="imageWatermarkToolStore.config.height" />
		</n-form-item>

		<n-form-item label="图片">
			<n-input v-model:value="imageWatermarkToolStore.config.image" />
		</n-form-item>

		<n-form-item label="图片高度">
			<n-input-number v-model:value="imageWatermarkToolStore.config.imageHeight" />
		</n-form-item>

		<n-form-item label="图片透明度">
			<n-input-number v-model:value="imageWatermarkToolStore.config.imageOpacity" />
		</n-form-item>

		<n-form-item label="图片宽度">
			<n-input-number v-model:value="imageWatermarkToolStore.config.imageWidth" />
		</n-form-item>

		<n-form-item label="旋转角度">
			<n-input-number v-model:value="imageWatermarkToolStore.config.rotate" />
		</n-form-item>

		<n-form-item label="被水印覆盖的内容是否可选中">
			<n-switch v-model:value="imageWatermarkToolStore.config.selectable" />
		</n-form-item>

		<n-form-item
			class="min-w-60"
			label="文本对齐方式"
		>
			<n-select
				v-model:value="imageWatermarkToolStore.config.textAlign"
				:options="textAligns"
			/>
		</n-form-item>

		<n-form-item label="宽度">
			<n-input-number v-model:value="imageWatermarkToolStore.config.width" />
		</n-form-item>

		<n-form-item label="X 轴间隔">
			<n-input-number v-model:value="imageWatermarkToolStore.config.xGap" />
		</n-form-item>

		<n-form-item label="X 轴偏移">
			<n-input-number v-model:value="imageWatermarkToolStore.config.xOffset" />
		</n-form-item>

		<n-form-item label="Y 轴间隔">
			<n-input-number v-model:value="imageWatermarkToolStore.config.yGap" />
		</n-form-item>

		<n-form-item label="Y 轴偏移">
			<n-input-number v-model:value="imageWatermarkToolStore.config.yOffset" />
		</n-form-item>

		<n-form-item label="Z 轴高度">
			<n-input-number v-model:value="imageWatermarkToolStore.config.zIndex" />
		</n-form-item>
	</n-flex>
</template>