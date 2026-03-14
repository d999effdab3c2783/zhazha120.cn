<script lang="ts" setup>
import CustomNaiveAutoStack from '@/components/custom/naive/auto-stack.vue'
import CustomNaiveHorizontalStack from '@/components/custom/naive/horizontal-stack.vue'
import CustomNaivePosition from '@/components/custom/naive/position.vue'
import { useDatabaseFile, useDatabaseValue } from '@/composables/database'
import type FurryCharacter from '@/database/tables/furry_character'
import { isDesktop, isMobile } from '@/shared/responsive'
import { NCard, NDivider, NElement, NH4, NImage, NTag, NText } from 'naive-ui'
import { isEmptyish, isNonNullish } from 'remeda'
import { computed } from 'vue'

defineOptions({
	name: 'SectionsFurryCharacter'
})

const props = defineProps<{
	readonly item: FurryCharacter
}>()

const illustration = computed(() => {
	return useDatabaseFile(
		useDatabaseValue(props.item, 'illustration')
	)
})
</script>

<template>
	<n-card size="small" v-bind="$attrs">
		<custom-naive-auto-stack>
			<template v-if="isNonNullish(illustration)">
				<n-image :class="{ 'w-1/5': isDesktop }" :src="illustration"/>
			</template>

			<n-element :class="{ 'text-center': isMobile }">
				<custom-naive-position :placement="(isMobile ? 'center' : 'top-left')" vertical>
					<custom-naive-auto-stack :size="0" align="center">
						<n-text class="text-6 fw-bold">{{ item.name }}</n-text>

						<template v-if="!isEmptyish(item.species_alias)">
							<template v-if="isDesktop">
								<n-divider vertical/>
							</template>

							<n-text class="text-5" type="primary">{{ item.species_alias }}</n-text>
						</template>
					</custom-naive-auto-stack>

					<custom-naive-horizontal-stack align="center">
						<template v-for="species in item.species">
							<n-tag type="primary">{{ (1 / item.species.length * 100).toFixed(2) }}% {{ species }}</n-tag>
						</template>
					</custom-naive-horizontal-stack>

					<template v-if="!isEmptyish(item.description)">
						<n-h4 :prefix="(isDesktop ? 'bar' : undefined)">{{ item.description }}</n-h4>
					</template>
				</custom-naive-position>
			</n-element>
		</custom-naive-auto-stack>
	</n-card>
</template>