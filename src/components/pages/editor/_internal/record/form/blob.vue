<script lang="ts" setup>
import SharedUploadDraggerContent from '@/components/shared/upload-dragger-content.vue'
import { convertFile, generateBlobURL } from '@/utils/blob'
import { NUpload, NUploadDragger, type UploadFileInfo } from 'naive-ui'
import { isNullish } from 'remeda'
import { computed } from 'vue'

const props = defineProps<{
	readonly value: Blob
}>()

const emits = defineEmits<{
	(event: 'upload', value: Blob): void
}>()

const fileList = computed<UploadFileInfo[]>(() => {
	if ( isNullish(props.value) ) {
		return []
	}

	if ( props.value instanceof File ) {
		return [
			{
				id: 'stored',
				status: 'finished',
				type: props.value.type,
				name: props.value.name,
				file: props.value,
				url: generateBlobURL(props.value)
			}
		]
	}

	return [
		{
			id: 'stored',
			status: 'finished',
			type: props.value.type,
			name: 'blob',
			file: convertFile(props.value, '-'),
			url: generateBlobURL(props.value)
		}
	]
})

const handleUpload = async (newFileList: UploadFileInfo[]) => {
	if (
		isNullish(newFileList) ||
		newFileList.length !== 1 ||
		isNullish(newFileList[0]) ||
		isNullish(newFileList[0].file)
	) {
		return
	}

	emits('upload', newFileList[0].file)
}
</script>

<template>
	<n-upload :file-list="fileList" :max="1" directory-dnd list-type="image" @update:file-list="handleUpload">
		<n-upload-dragger>
			<shared-upload-dragger-content/>
		</n-upload-dragger>
	</n-upload>
</template>