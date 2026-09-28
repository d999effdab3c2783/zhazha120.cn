<script setup lang="ts">
	import { clsx } from 'clsx'
	import { computed } from 'vue'

	import type { GithubDevProject } from '~/types/dev'

	const props = defineProps<{
		readonly item: GithubDevProject
	}>()

	const href = computed(() => {
		return `https://github.com/${props.item.owner}/${props.item.repo}`
	})

	const buttonClassNames = clsx('py-2 h-full')
</script>

<template>
	<sections-dev-projects-base
		:href="href"
		icon="i-ant-design:github-outlined"
		:item="item"
		:peers="{
			button: {
				class: buttonClassNames
			}
		}"
	>
		<n-flex
			align="start"
			class="!gap-1"
			:size="0"
			vertical
		>
			<n-text class="text-current">{{ item.name }}</n-text>

			<n-text
				class="text-[.6em]"
				:depth="3"
			>
				{{ item.owner }}/{{ item.repo }}
			</n-text>
		</n-flex>
	</sections-dev-projects-base>
</template>