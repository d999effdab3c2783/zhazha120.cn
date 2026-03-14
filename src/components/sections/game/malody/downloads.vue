<script lang="ts" setup>
import CustomNaiveAutoStack from '@/components/custom/naive/auto-stack.vue'
import CustomNaiveButton from '@/components/custom/naive/button.vue'
import CustomRedirect from '@/components/custom/redirect.vue'
import { useDatabase } from '@/composables/database'
import type MalodyDownload from '@/database/tables/malody_download'
import { NCard } from 'naive-ui'
import { isEmptyish } from 'remeda'

defineOptions({
	name: 'SectionsGameMalodyDownloads'
})

const items = useDatabase<MalodyDownload[]>(async database => {
	return database.malody_downloads.toArray()
})
</script>

<template>
	<template v-if="!isEmptyish(items)">
		<n-card size="small" title="备份 & 下载">
			<custom-naive-auto-stack>
				<template v-for="item in items">
					<custom-redirect :href="item.href">
						<custom-naive-button icon="i-ant-design:download-outlined">{{ item.name }}</custom-naive-button>
					</custom-redirect>
				</template>
			</custom-naive-auto-stack>
		</n-card>
	</template>
</template>