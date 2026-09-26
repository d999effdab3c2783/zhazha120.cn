<script setup lang="ts">
	import { useBrowserLocation } from '@vueuse/core'
	import type { QrCodeProps } from 'naive-ui'
	import { useThemeVars } from 'naive-ui'
	import { shallowReactive } from 'vue'

	import { useResponsive } from '~/composables/responsive'
	import { useOwnerStore } from '~/stores/owner'

	const { isMobile } = useResponsive()
	const location = useBrowserLocation()
	const themeVars = useThemeVars()
	const ownerStore = useOwnerStore()

	const config = shallowReactive<Partial<QrCodeProps>>({
		color: themeVars.value.primaryColor,
		errorCorrectionLevel: 'H',
		iconBackgroundColor: 'transparent',
		iconSize: 60,
		iconSrc: ownerStore.avatar,
		value: location.value.href,
		size: 240,
		type: 'svg'
	})

	const applyPreset = (name: string) => {
		switch (name) {
			case 'default':
				delete config.color
				delete config.iconBackgroundColor
				delete config.iconSize
				delete config.iconSrc
				break
		}
	}
</script>

<template>
	<n-flex
		size="large"
		vertical
	>
		<n-flex
			size="small"
			vertical
		>
			<n-input v-model:value="config.value" />

			<transition
				appear
				mode="out-in"
				name="v-fade"
			>
				<template v-if="config.value !== location.href">
					<n-flex
						class="text-[.8em]"
						size="small"
					>
						<n-text :depth="3">使用当前 URL:</n-text>

						<n-text
							class="hover:cursor-pointer"
							type="info"
							@click="config.value = location.href"
						>
							{{ location.href }}
						</n-text>
					</n-flex>
				</template>
			</transition>
		</n-flex>

		<n-element class="utils__center--grid size-full">
			<n-qr-code
				class="box-content"
				v-bind="config"
			/>
		</n-element>

		<n-divider class="!my-0" />

		<n-flex
			justify="space-evenly"
			size="large"
			:vertical="isMobile"
		>
			<n-form-item
				class="min-w-60"
				label="背景颜色"
				:show-feedback="false"
			>
				<n-color-picker
					v-model:value="config.backgroundColor"
					default-value="#FFF"
				/>
			</n-form-item>

			<n-form-item
				class="min-w-60"
				label="颜色"
				:show-feedback="false"
			>
				<n-color-picker
					v-model:value="config.color"
					default-value="#000"
				/>
			</n-form-item>

			<n-form-item
				label="纠错级别"
				:show-feedback="false"
			>
				<n-radio-group
					v-model:value="config.errorCorrectionLevel"
					size="small"
				>
					<n-radio-button value="L">L</n-radio-button>
					<n-radio-button value="M">M</n-radio-button>
					<n-radio-button value="Q">Q</n-radio-button>
					<n-radio-button value="H">H</n-radio-button>
				</n-radio-group>
			</n-form-item>

			<n-form-item
				class="min-w-60"
				label="图标背景颜色"
				:show-feedback="false"
			>
				<n-color-picker
					v-model:value="config.iconBackgroundColor"
					default-value="#FFF"
				/>
			</n-form-item>

			<n-form-item
				label="图标圆角大小"
				:show-feedback="false"
			>
				<n-input-number
					v-model:value="config.iconBorderRadius"
					:min="0"
					:step="1"
				/>
			</n-form-item>

			<n-form-item
				label="图标大小"
				:show-feedback="false"
			>
				<n-input-number
					v-model:value="config.iconSize"
					:min="0"
					:step="1"
				/>
			</n-form-item>

			<n-form-item
				label="图标地址"
				:show-feedback="false"
			>
				<n-input v-model:value="config.iconSrc" />
			</n-form-item>

			<n-form-item
				label="填充大小"
				:show-feedback="false"
			>
				<n-input-number
					v-model:value="config.padding as number"
					:min="0"
					:step="1"
				/>
			</n-form-item>

			<n-form-item
				label="大小"
				:show-feedback="false"
			>
				<n-input-number
					v-model:value="config.size"
					:min="0"
					:step="1"
				/>
			</n-form-item>

			<n-form-item
				label="渲染类型"
				:show-feedback="false"
			>
				<n-radio-group
					v-model:value="config.type"
					size="small"
				>
					<n-radio-button value="canvas">Canvas</n-radio-button>
					<n-radio-button value="svg">SVG</n-radio-button>
				</n-radio-group>
			</n-form-item>
		</n-flex>

		<n-divider class="!my-0" />

		<n-flex
			align="center"
			justify="center"
			size="small"
			:vertical="isMobile"
		>
			<n-button
				:block="isMobile"
				@click="applyPreset('default')"
			>
				默认样式
			</n-button>
		</n-flex>
	</n-flex>
</template>

<style scoped lang="scss">
	@use '~/styles/utils';
</style>