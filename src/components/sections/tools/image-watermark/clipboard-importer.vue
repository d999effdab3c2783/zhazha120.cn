<script lang="ts" setup>
import CustomNaiveAutoStack from '@/components/custom/naive/auto-stack.vue'
import CustomNaiveButton from '@/components/custom/naive/button.vue'
import CustomNaiveModalWrapper from '@/components/custom/naive/modal-wrapper.vue'
import CustomNaiveVerticalStack from '@/components/custom/naive/vertical-stack.vue'
import { generateBlobURL } from '@/utils/blob'
import { paste } from '@/utils/clipboard'
import { useEventListener } from '@vueuse/core'
import { NImage, NText, useMessage } from 'naive-ui'
import { isNonNullish, isNullish } from 'remeda'
import { ref, useTemplateRef } from 'vue'

defineOptions({
	name: 'SectionsToolsImageWatermarkClipboardImporter'
})

const file = defineModel<Blob>('file')
const files = ref<Blob[]>()

const message = useMessage()
const multipleSelectorModalRef = useTemplateRef('multipleSelectorModalRef')

const imageMimetypePrefix = 'image/'

useEventListener('paste', e => {
	if ( isNullish(e.clipboardData) ) {
		return
	}

	files.value = []

	for (const index in e.clipboardData.items) {
		const item = e.clipboardData.items[index]

		if ( item.kind === 'file' ) {
			const file = item.getAsFile()

			if ( isNullish(file) ) {
				continue
			}

			if ( file.type.startsWith(imageMimetypePrefix) ) {
				files.value.push(file)
				break
			}
		}
	}

	handleAction()
})

const handleRead = async () => {
	const items = await paste()

	if ( isNullish(items) ) {
		return
	}

	files.value = []

	for (const item of items) {
		for (const type of item.types) {
			if ( type.startsWith(imageMimetypePrefix) ) {
				const blob = await item.getType(type)
				files.value.push(blob)
			}
		}
	}

	handleAction()
}

const handleAction = () => {
	if ( isNullish(files.value) ) {
		return
	}

	if ( files.value.length <= 0 ) {
		message.error('剪贴板中没有图片')
		return
	}

	if ( files.value.length > 1 ) {
		if ( isNonNullish(multipleSelectorModalRef.value) ) {
			multipleSelectorModalRef.value.show()
		}

		return
	}

	file.value = files.value[0]
}

const handleSelect = async (selectedFile: Blob) => {
	if ( isNonNullish(multipleSelectorModalRef.value) ) {
		multipleSelectorModalRef.value.hide()
	}

	file.value = selectedFile
}
</script>

<template>
	<custom-naive-modal-wrapper ref="multipleSelectorModalRef" preset="card" size="small" title="项目冲突">
		<custom-naive-vertical-stack align="center">
			<n-text class="text-6">剪贴板中存在多张图片</n-text>

			<custom-naive-auto-stack justify="center">
				<template v-for="item in files">
					<custom-naive-vertical-stack>
						<n-image :src="generateBlobURL(item)" class="size-40"/>
						<custom-naive-button size="small" @click="handleSelect(item)">选择</custom-naive-button>
					</custom-naive-vertical-stack>
				</template>
			</custom-naive-auto-stack>
		</custom-naive-vertical-stack>
	</custom-naive-modal-wrapper>

	<custom-naive-button icon="i-tabler:clipboard" @click="handleRead">从剪贴板读取</custom-naive-button>
</template>