<script lang="ts" setup>
	import { useObjectUrl } from '@vueuse/core'
	import { isNil } from 'es-toolkit'
	import { NIcon, NText, NUpload, NUploadDragger, type UploadFileInfo } from 'naive-ui'
	import { computed } from 'vue'

	import { useImageWatermarkToolStore } from '~/stores/tools'

	const imageWatermarkToolStore = useImageWatermarkToolStore()
	const fileObjectUrl = useObjectUrl(() => imageWatermarkToolStore.file)

	const fileList = computed<UploadFileInfo[]>(() => {
		if (isNil(imageWatermarkToolStore.file)) {
			return []
		}

		if (imageWatermarkToolStore.file instanceof File) {
			return [
				{
					id: 'stored',
					status: 'finished',
					type: imageWatermarkToolStore.file.type,
					name: imageWatermarkToolStore.file.name,
					file: imageWatermarkToolStore.file,
					url: fileObjectUrl.value
				}
			]
		}

		return [
			{
				id: 'stored',
				status: 'finished',
				type: imageWatermarkToolStore.file.type,
				name: 'blob',
				file: new File([imageWatermarkToolStore.file], '-', {
					type: imageWatermarkToolStore.file.type
				}),
				url: fileObjectUrl.value
			}
		]
	})

	const handleUpload = async (newFileList: UploadFileInfo[]) => {
		if (isNil(newFileList) || newFileList.length !== 1 || isNil(newFileList[0]) || isNil(newFileList[0].file)) {
			return
		}

		imageWatermarkToolStore.file = newFileList[0].file
	}
</script>

<template>
	<n-upload
		directory-dnd
		:file-list="fileList"
		:max="1"
		v-bind="$attrs"
		@update:file-list="handleUpload"
	>
		<n-upload-dragger>
			<n-flex
				align="center"
				size="small"
				vertical
			>
				<n-icon class="i-ant-design:upload-outlined size-12" />
				<n-text>点击或者拖动文件到该区域来上传</n-text>
			</n-flex>
		</n-upload-dragger>
	</n-upload>
</template>