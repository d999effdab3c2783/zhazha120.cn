<script lang="ts" setup>
import { formatDistance } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import { NCard } from 'naive-ui'
import information from '~/data/information'

definePageMeta({
	name: '生日详情'
})

const route = useRoute()

const birthday = useAsyncData(async () => {
	return await queryCollection('birthday').where('age', '=', route.params.age).first()
})

const date = computed(() => {
	if (birthday.data.value === null) {
		return
	}

	const newDate = new Date(information.birthday)

	newDate.setFullYear(newDate.getFullYear() + birthday.data.value.age)

	return newDate
})

const ago = computed(() => {
	if (date.value === undefined) {
		return
	}

	return formatDistance(new Date(), date.value, {
		locale: zhCN
	})
})
</script>

<template>
	<custom-sub-page>
		<custom-async-data-adapter :value="birthday">
			<template #success="{ data }">
				<n-card size="small">
					<template v-if="data !== null">
						<n-flex align="center" vertical>
							<span class="text-6xl fw-extrabold">{{ data.age }}</span>

							<n-flex align="center" size="small">
								<n-text v-if="date !== undefined" :depth="3">{{ date.toLocaleDateString() }}</n-text>
								<n-text v-if="ago !== undefined" :depth="3" class="text-sm">({{ ago }}前)</n-text>
							</n-flex>
						</n-flex>
					</template>

					<template v-else>
						<n-result :description="(`可能是 ${route.params.age} 岁生日时并没有发生什么值得纪念的事情`)" size="small" status="404" title="没有记录"/>
					</template>
				</n-card>

				<template v-if="data !== null">
					<ContentRenderer :value="data.body"/>
				</template>
			</template>
		</custom-async-data-adapter>
	</custom-sub-page>
</template>