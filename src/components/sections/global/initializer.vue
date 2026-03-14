<script lang="ts" setup>
import 'dexie-export-import'
import CustomNaivePosition from '@/components/custom/naive/position.vue'
import CustomNaiveVerticalStack from '@/components/custom/naive/vertical-stack.vue'
import CustomTransitionsFade from '@/components/custom/transitions/fade.vue'
import config from '@/config/database'
import database from '@/database'
import { alova } from '@/shared/alova'
import { initialized } from '@/shared/global.ts'
import { decompressBlob } from '@/utils/blob'
import { useStorage } from '@vueuse/core'
import { NResult, NSpin, NText } from 'naive-ui'
import { onBeforeMount, ref } from 'vue'

const database_url = '/v4.zhazha120-db'

const cache_database_etag = useStorage<string>('database.etag', null)
const cache_database_last_modified = useStorage<string>('database.last_modified', null)
const cache_content_length = useStorage<string>('database.content_length', null)

const loading = ref(true)
const success = ref(false)

onBeforeMount(async () => {
	if ( import.meta.env.DEV ) {
		loading.value = false
		success.value = true
		initialized.value = true
		return
	}

	try {
		const database_information = await alova.Head<Response>(database_url).send()

		const last_modified = database_information.headers.get('Last-Modified')
		const etag = database_information.headers.get('ETag')
		const content_length = database_information.headers.get('Content-Length')

		if (
			last_modified !== cache_database_last_modified.value ||
			etag !== cache_database_etag.value ||
			content_length !== cache_content_length.value
		) {
			cache_database_last_modified.value = last_modified
			cache_database_etag.value = etag
			cache_content_length.value = content_length

			await database.instance.delete()
			await database.instance.open()

			const database_data = await alova.Get<Response>(database_url).send()

			if ( database_data.ok ) {
				const blob = await database_data.blob()
				const processed = await decompressBlob(blob, config.compression_format)

				await database.instance.import(processed)

				success.value = true

				return
			}

			return
		}

		success.value = true
	} finally {
		loading.value = false
		initialized.value = true
	}
})
</script>

<template>
	<custom-transitions-fade appear mode="out-in">
		<template v-if="loading">
			<custom-naive-position class="h-screen" placement="center">
				<custom-naive-vertical-stack :size="12">
					<n-spin size="large"/>
					<n-text class="text-8">加载中</n-text>
				</custom-naive-vertical-stack>
			</custom-naive-position>
		</template>

		<template v-else>
			<template v-if="success">
				<slot/>
			</template>

			<template v-else>
				<n-result status="error" title="初始化异常 请联系渣渣"/>
			</template>
		</template>
	</custom-transitions-fade>
</template>