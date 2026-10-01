<script setup lang="ts">
	import { clsx } from 'clsx'
	import { intersection, isNil, isNotNil } from 'es-toolkit'
	import type { ButtonProps } from 'naive-ui'
	import { computed } from 'vue'

	import { useResponsive } from '~/composables/responsive'
	import type { BaseDevProject } from '~/types/dev'

	const props = defineProps<
		{
			readonly item: BaseDevProject

			readonly icon: string
			readonly href: string
		} & Partial<{
			readonly peers: Partial<{
				readonly button: ButtonProps &
					Partial<{
						readonly class: string
					}>
			}>
		}>
	>()

	const { isMobile } = useResponsive()

	const buttonClassNames = computed(() => {
		return clsx({
			'opacity-50': isNil(props.item.tags) || intersection(props.item.tags, ['active', 'maintained']).length <= 0
		})
	})
</script>

<template>
	<custom-redirect :href="href">
		<template #default="{ aProps, redirect }">
			<n-button
				v-bind="{
					...aProps,
					...(isNotNil(peers) ? peers.button : {})
				}"
				:block="isMobile"
				class="text-start whitespace-pre-line"
				:class="buttonClassNames"
				secondary
				tag="a"
				@click.prevent="redirect"
			>
				<template #icon>
					<slot name="icon">
						<n-icon :class="icon" />
					</slot>
				</template>

				<slot>{{ item.name }}</slot>
			</n-button>
		</template>

		<template
			v-if="isNotNil(item.tags)"
			#footer
		>
			<sections-dev-projects-tags :item="item" />
		</template>
	</custom-redirect>
</template>