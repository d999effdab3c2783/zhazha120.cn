<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'

	import type { FurryCharacter } from '~/types/furry'

	defineProps<{
		readonly item: FurryCharacter
	}>()
</script>

<template>
	<template v-if="isNotNil(item.owner)">
		<n-flex
			align="center"
			justify="end"
			:size="0"
		>
			<n-text class="mr-1">所有者: </n-text>

			<template v-if="item.owner.href">
				<custom-redirect
					#="{ aProps, redirect }"
					:href="item.owner.href"
				>
					<n-button
						tag="a"
						text
						type="primary"
						v-bind="aProps"
						@click.prevent="redirect"
					>
						{{ item.owner.name }}
					</n-button>
				</custom-redirect>
			</template>

			<template v-else>
				<n-text type="info">{{ item.owner.name }}</n-text>
			</template>
		</n-flex>
	</template>
</template>