<script lang="ts" setup>
	import { useObjectUrl } from '@vueuse/core'
	import { isNil, isNotNil } from 'es-toolkit'
	import { toBlob } from 'html-to-image'
	import { useTemplateRef } from 'vue'

	import { useImageWatermarkToolStore } from '~/stores/tools'

	const imageWatermarkToolStore = useImageWatermarkToolStore()
	const fileObjectUrl = useObjectUrl(() => imageWatermarkToolStore.file)

	const containerRef = useTemplateRef('containerRef')

	const handleDownload = async () => {
		if (isNil(containerRef.value)) {
			return
		}

		const image: HTMLImageElement | null = containerRef.value.$el.querySelector('.n-image > img')

		if (isNil(image)) {
			return
		}

		const result = await toBlob(containerRef.value.$el, {
			width: image.naturalWidth,
			height: image.naturalHeight,
			canvasWidth: image.naturalWidth,
			canvasHeight: image.naturalHeight,
			pixelRatio: 1,
			quality: 1
		})

		if (isNil(result)) {
			return
		}

		const a = document.createElement('a')

		a.href = URL.createObjectURL(result)
		a.toggleAttribute('download', true)
		a.click()
	}
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<n-card size="small">
			<n-flex
				size="small"
				vertical
			>
				<template v-if="isNotNil(imageWatermarkToolStore.file)">
					<n-image
						class="[&>img]:w-full"
						:src="fileObjectUrl"
					/>

					<n-button
						secondary
						type="error"
						@click="imageWatermarkToolStore.file = undefined"
					>
						<template #icon>
							<n-icon class="i-ant-design:delete-outlined" />
						</template>

						重新选择
					</n-button>
				</template>

				<template v-else>
					<sections-tools-image-watermark-importer />
				</template>
			</n-flex>
		</n-card>

		<n-card size="small">
			<n-flex
				align="center"
				size="small"
				vertical
			>
				<template v-if="isNotNil(imageWatermarkToolStore.file)">
					<n-element ref="containerRef">
						<n-watermark v-bind="imageWatermarkToolStore.config">
							<n-image
								class="[&>img]:size-full"
								preview-disabled
								:src="fileObjectUrl"
							/>
						</n-watermark>
					</n-element>

					<n-button @click="handleDownload">
						<template #icon>
							<n-icon class="i-ant-design:download-outlined" />
						</template>

						保存
					</n-button>

					<n-divider />
				</template>

				<sections-tools-image-watermark-config />
			</n-flex>
		</n-card>
	</n-flex>
</template>