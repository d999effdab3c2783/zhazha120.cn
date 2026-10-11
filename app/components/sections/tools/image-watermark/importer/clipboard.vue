<script lang="ts" setup>
	import { useClipboard, useEventListener, useObjectUrl } from '@vueuse/core'
	import { isNil, isNotNil } from 'es-toolkit'
	import { NImage, NText, useMessage } from 'naive-ui'
	import { ref, useTemplateRef } from 'vue'

	import { useResponsive } from '~/composables/responsive'
	import { useApiStore } from '~/stores/api'
	import { useImageWatermarkToolStore } from '~/stores/tools'

	defineOptions({
		name: 'SectionsToolsImageWatermarkClipboardImporter'
	})

	const imageWatermarkToolStore = useImageWatermarkToolStore()
	const fileObjectUrl = useObjectUrl(() => imageWatermarkToolStore.file)

	const { isMobile } = useResponsive()

	const files = ref<Blob[]>()

	const message = useMessage()
	const multipleSelectorModalRef = useTemplateRef('multipleSelectorModalRef')

	const imageMimetypePrefix = 'image/'

	useEventListener('paste', e => {
		if (isNil(e.clipboardData)) {
			return
		}

		files.value = []

		for (const index in e.clipboardData.items) {
			const item = e.clipboardData.items[index]

			if (isNil(item)) {
				continue
			}

			if (item.kind === 'file') {
				const file = item.getAsFile()

				if (isNil(file)) {
					continue
				}

				if (file.type.startsWith(imageMimetypePrefix)) {
					files.value.push(file)
					break
				}
			}
		}

		handleAction()
	})

	const paste = async () => {
		const clipboard = useClipboard({
			read: true
		})

		const apiStore = useApiStore()

		if (!clipboard.isSupported.value) {
			if (isNotNil(apiStore.message)) {
				apiStore.message.error('复制失败, 不支持当前环境')
			}

			return
		}

		return await navigator.clipboard.read()
	}

	const handleRead = async () => {
		const items = await paste()

		if (isNil(items)) {
			return
		}

		files.value = []

		await Promise.all(
			items.map(async item => {
				await Promise.all(
					item.types.map(async type => {
						if (isNil(files.value)) {
							return
						}

						if (type.startsWith(imageMimetypePrefix)) {
							const blob = await item.getType(type)
							files.value.push(blob)
						}
					})
				)
			})
		)

		handleAction()
	}

	const handleAction = () => {
		if (isNil(files.value)) {
			return
		}

		if (files.value.length <= 0) {
			message.error('剪贴板中没有图片')
			return
		}

		if (files.value.length > 1) {
			if (isNotNil(multipleSelectorModalRef.value)) {
				multipleSelectorModalRef.value.show()
			}

			return
		}

		imageWatermarkToolStore.file = files.value[0]
	}

	const handleSelect = async (selectedFile: Blob) => {
		if (isNotNil(multipleSelectorModalRef.value)) {
			multipleSelectorModalRef.value.hide()
		}

		imageWatermarkToolStore.file = selectedFile
	}
</script>

<template>
	<custom-modal
		ref="multipleSelectorModalRef"
		preset="card"
		size="small"
		title="项目冲突"
	>
		<n-flex
			align="center"
			size="small"
			vertical
		>
			<n-text class="text-6">剪贴板中存在多张图片</n-text>

			<n-flex
				justify="center"
				size="small"
				:vertical="isMobile"
			>
				<template
					v-for="(item, index) in files"
					:key="index"
				>
					<n-flex
						size="small"
						vertical
					>
						<n-image
							class="size-40"
							:src="fileObjectUrl"
						/>

						<n-button
							size="small"
							@click="handleSelect(item)"
						>
							选择
						</n-button>
					</n-flex>
				</template>
			</n-flex>
		</n-flex>
	</custom-modal>

	<n-button @click="handleRead">
		<template #icon>
			<n-icon class="i-tabler:clipboard" />
		</template>

		从剪贴板读取
	</n-button>
</template>