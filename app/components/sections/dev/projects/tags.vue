<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'

	import { tags as tagMappings } from '~/stores/dev/projects'
	import type { BaseDevProject } from '~/types/dev'

	defineProps<{
		readonly item: BaseDevProject
	}>()
</script>

<template>
	<template v-if="isNotNil(item.tags)">
		<n-flex
			align="center"
			size="small"
			vertical
		>
			<n-text
				class="text-[.8em]"
				:depth="3"
			>
				标签仅供参考
			</n-text>

			<n-flex size="small">
				<template
					v-for="(tag, index) in item.tags"
					:key="index"
				>
					<n-tag class="py-1 h-full">
						<n-flex
							align="center"
							:size="0"
							vertical
						>
							<n-text>{{ tagMappings[tag] }}</n-text>

							<n-text
								class="text-[.8em]"
								:depth="3"
							>
								{{ tag }}
							</n-text>
						</n-flex>
					</n-tag>
				</template>
			</n-flex>
		</n-flex>
	</template>
</template>