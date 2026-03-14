<script lang="ts" setup>
import CustomNaiveAutoStack from '@/components/custom/naive/auto-stack.vue'
import CustomNaiveButton from '@/components/custom/naive/button.vue'
import CustomModalWrapper from '@/components/custom/naive/modal-wrapper.vue'
import CustomNaiveVerticalStack from '@/components/custom/naive/vertical-stack.vue'
import { useZodRegistry } from '@/composables/database'
import { useSync } from '@/composables/ref'
import { useThemeStore } from '@/stores/theme'
import { XNSelect, XNSelectOption } from '@skit/x.naive-ui'
import { NColorPicker, NDivider, NFormItem, NInput, NInputNumber, NQrCode, type QrCodeProps } from 'naive-ui'
import { isNonNullish } from 'remeda'
import { ref, toRef } from 'vue'
import { z } from 'zod'

defineOptions({
	name: 'SectionsUtilsQrcode',
	inheritAttrs: false
})

const themeStore = useThemeStore()

const config = ref<
	Partial<QrCodeProps>
>({
	backgroundColor: '#ffffff',
	color: isNonNullish(themeStore.primaryColors) ? themeStore.primaryColors[5] : '#000000',
	errorCorrectionLevel: 'H',
	iconBackgroundColor: '#ffffff',
	iconBorderRadius: 4,
	iconSize: 48,
	padding: 12,
	value: location.href,
	size: 240,
	type: 'svg'
})

const {
	0: avatar
} = useZodRegistry(
	z.object({
		'intro.avatar:0': z.string()
			.describe('file')
	})
)

useSync([
	{
		source: avatar,
		target: toRef(config.value, 'iconSrc')
	}
])
</script>

<template>
	<custom-modal-wrapper preset="card" size="small" title="二维码">
		<template #trigger="{ toggle }">
			<custom-naive-button icon="i-ant-design:qrcode-outlined" @click="toggle">二维码</custom-naive-button>
		</template>

		<custom-naive-vertical-stack>
			<n-input v-model:value="config.value"/>

			<n-divider/>

			<n-element class="mx-auto">
				<n-qr-code class="box-content" v-bind="config"/>
			</n-element>

			<n-divider/>

			<custom-naive-auto-stack justify="space-evenly">
				<n-form-item class="min-w-60" label="背景颜色">
					<n-color-picker v-model:value="config.backgroundColor"/>
				</n-form-item>

				<n-form-item class="min-w-60" label="颜色">
					<n-color-picker v-model:value="config.color"/>
				</n-form-item>

				<n-form-item class="min-w-60" label="纠错级别">
					<x-n-select v-model:value="config.errorCorrectionLevel">
						<x-n-select-option value="L">L (7%)</x-n-select-option>
						<x-n-select-option value="M">M (15%)</x-n-select-option>
						<x-n-select-option value="Q">Q (25%)</x-n-select-option>
						<x-n-select-option value="H">H (30%)</x-n-select-option>
					</x-n-select>
				</n-form-item>

				<n-form-item class="min-w-60" label="图标背景颜色">
					<n-color-picker v-model:value="config.iconBackgroundColor"/>
				</n-form-item>

				<n-form-item label="图标圆角">
					<n-input-number v-model:value="config.iconBorderRadius"/>
				</n-form-item>

				<n-form-item label="图标大小">
					<n-input-number v-model:value="config.iconSize"/>
				</n-form-item>

				<n-form-item label="图标地址">
					<n-input v-model:value="config.iconSrc"/>
				</n-form-item>

				<n-form-item label="边距">
					<n-input-number v-model:value="config.padding as number"/>
				</n-form-item>

				<n-form-item label="尺寸">
					<n-input-number v-model:value="config.size"/>
				</n-form-item>

				<n-form-item class="min-w-60" label="渲染类型">
					<x-n-select v-model:value="config.type">
						<x-n-select-option value="canvas">canvas</x-n-select-option>
						<x-n-select-option value="svg">svg</x-n-select-option>
					</x-n-select>
				</n-form-item>
			</custom-naive-auto-stack>
		</custom-naive-vertical-stack>
	</custom-modal-wrapper>
</template>