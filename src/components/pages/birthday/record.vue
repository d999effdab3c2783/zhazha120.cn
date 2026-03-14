<script lang="ts" setup>
import CustomMarkdown from '@/components/custom/markdown/index.vue'
import CustomNaivePosition from '@/components/custom/naive/position.vue'
import LayoutsSubPage from '@/components/layouts/sub-page.vue'
import { useDatabase, useZodRegistry } from '@/composables/database'
import type BirthdayRecord from '@/database/tables/birthday_record'
import { useRouteParams } from '@vueuse/router'
import { NCard, NResult, NText } from 'naive-ui'
import { isNonNullish, isNullish } from 'remeda'
import { computed } from 'vue'
import { z } from 'zod'

const age = useRouteParams('age', undefined, {
	transform: Number
})

const {
	0: min_age,
	1: min_age_message,
	2: max_age,
	3: max_age_message
} = useZodRegistry(
	z.object({
		'birthday.min_age.value:0': z.number(),
		'birthday.min_age.message:1': z.string(),
		'birthday.max_age.value:2': z.number(),
		'birthday.max_age.message:3': z.string()
	})
)

const item = useDatabase<BirthdayRecord>(async database => {
	if ( isNullish(age.value) ) {
		return
	}

	return database.birthday_records
		.where('age')
		.equals(age.value)
		.first()
})

const is_min_age = computed(() => {
	if ( isNullish(age.value) || isNullish(min_age.value) ) {
		return
	}

	return age.value < min_age.value
})

const real_min_age_message = computed(() => {
	if ( isNullish(age) || isNullish(min_age_message.value) ) {
		return
	}

	return min_age_message.value.replace(
		'{age}',
		String(age.value)
	)
})

const is_max_age = computed(() => {
	if ( isNullish(age.value) || isNullish(max_age.value) ) {
		return
	}

	return age.value > max_age.value
})

const real_max_age_message = computed(() => {
	if ( isNullish(age.value) || isNullish(max_age_message.value) ) {
		return
	}

	return max_age_message.value.replace(
		'{age}',
		String(age.value)
	)
})
</script>

<template>
	<layouts-sub-page>
		<template v-if="isNonNullish(item)">
			<n-card size="small">
				<custom-naive-position placement="center">
					<n-text class="text-12 fw-bold">{{ age }}</n-text>
				</custom-naive-position>
			</n-card>

			<custom-markdown :raw="item.content"/>
		</template>

		<template v-else>
			<n-card size="small">
				<template v-if="is_min_age || is_max_age">
					<template v-if="is_min_age">
						<n-result :description="real_min_age_message" status="error" title="无结果"/>
					</template>

					<template v-if="is_max_age">
						<n-result :description="real_max_age_message" status="error" title="无结果"/>
					</template>
				</template>

				<template v-else>
					<n-result :description="(`可能是 ${age} 岁生日时并没有发生什么值得记录的事情`)" status="404" title="无结果"/>
				</template>
			</n-card>
		</template>
	</layouts-sub-page>
</template>