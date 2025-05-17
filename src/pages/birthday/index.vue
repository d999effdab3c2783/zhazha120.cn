<script lang="ts" setup>
import { Candle } from '@vicons/tabler'
import { differenceInMilliseconds } from 'date-fns'
import information from '~/data/information'
import { isDesktop, isMobile } from '~/shared/responsive'

definePageMeta({
	name: '往期生日'
})

const birthdays = useAsyncData(async () => {
	return await queryCollection('birthday').all()
})

const now = useNow()

const age = computed(() => {
	return (differenceInMilliseconds(now.value, information.birthday) / 1000 / 60 / 60 / 24 / 365).toFixed(15)
})

const router = useRouter()

const handleClick = (age: number) => {
	router.push({
		name: '生日详情',
		params: {
			age
		}
	})
}
</script>

<template>
	<custom-sub-page>
		<n-card size="small">
			<n-scrollbar x-scrollable>
				<div class="lt-md:w-max">
					<n-flex align="center" size="small" vertical>
						<div class="text-4xl fw-bold">
							<n-flex :wrap="false" justify="center" size="small">
								<span>{{ information.short_name }} 现在</span>

								<n-flex :size="0" :wrap="false" align="center">
									<n-text type="success">{{ age.split('.')[0] }}</n-text>
									<n-text :depth="3">.</n-text>
									<n-text type="info">{{ age.split('.')[1] }}</n-text>
								</n-flex>

								<span>岁了</span>
							</n-flex>
						</div>

						<n-text :depth="3" class="text-sm">({{ information.birthday.toLocaleDateString() }})</n-text>
					</n-flex>
				</div>
			</n-scrollbar>
		</n-card>

		<n-card size="small">
			<custom-async-data-adapter :value="birthdays">
				<template #success="{ data }">
					<n-flex :justify="isDesktop ? 'center' : undefined" :vertical="isMobile">
						<template v-for="birthday in data">
							<n-button @click="handleClick(birthday.age)">
								<template #icon>
									<n-icon :component="Candle"/>
								</template>

								{{ birthday.age }} 岁
							</n-button>
						</template>
					</n-flex>
				</template>
			</custom-async-data-adapter>
		</n-card>
	</custom-sub-page>
</template>