<script lang="ts" setup>
import { NCard } from 'naive-ui'

definePageMeta({
	name: '生日详情'
})

const route = useRoute()

const birthday = useAsyncData(async () => {
	return await queryCollection('birthday').where('age', '=', route.params.age).first()
})
</script>

<template>
	<custom-sub-page>
		<custom-async-data-adapter :value="birthday">
			<template #success="{ data }">
				<n-card size="small">
					<template v-if="data !== null">
						<n-flex justify="center">
							<span class="text-6xl fw-extrabold">{{ data.age }}</span>
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