<script lang="ts" setup>
import CustomNaiveButton from '@/components/custom/naive/button.vue'
import config from '@/config/database'
import { compressBlob, generateBlobURL } from '@/utils/blob'
import type { Dexie } from 'dexie'
import { useLoadingBar } from 'naive-ui'

const props = defineProps<{
	readonly database: Dexie
}>()

const loadingBar = useLoadingBar()

const handle = async () => {
	loadingBar.start()

	const blob = await props.database.export({
		progressCallback: progress => {
			if ( progress.done ) {
				loadingBar.finish()
			}

			return true
		}
	})

	const processed = await compressBlob(blob, config.compression_format)

	const url = generateBlobURL(processed)

	const element = document.createElement('a')
	element.setAttribute('href', url)
	element.setAttribute('download', `${props.database.name}${config.file_suffix}`)
	element.click()
}
</script>

<template>
	<custom-naive-button icon="i-ant-design:export-outlined" secondary @click="handle">导出</custom-naive-button>
</template>