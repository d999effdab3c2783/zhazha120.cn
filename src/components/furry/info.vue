<script lang="ts" setup>
import { isNonNullish } from 'remeda'
import { isMobile } from '~/shared/responsive'
import type { FurryCollectionItem } from '~/types/furry'

defineProps<{
	readonly value: FurryCollectionItem
}>()
</script>

<template>
	<n-flex :size="0" vertical>
		<div class="fw-bold">
			<n-flex :justify="isMobile ? 'center' : undefined" :size="0" align="center">
				<n-text>{{ value.name }}</n-text>

				<n-divider vertical/>

				<n-text type="info">物种: {{ value.animal }}</n-text>

				<template v-if="isNonNullish(value.designer)">
					<n-divider vertical/>

					<n-text type="warning">设计者: {{ value.designer }}</n-text>
				</template>
			</n-flex>
		</div>

		<div class="lt-md:text-center">
			<span>{{ value.description }}</span>
		</div>
	</n-flex>
</template>