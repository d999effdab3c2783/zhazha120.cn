<script setup lang="ts">
	import { clsx } from 'clsx'
	import { intersection, isNil, isNotNil } from 'es-toolkit'
	import type { ButtonProps } from 'naive-ui'
	import { computed } from 'vue'

	import { useResponsive } from '~/composables/responsive'
	import { tags as tagMappings } from '~/stores/dev/projects'
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
			<slot name="footer">
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
			</slot>
		</template>
	</custom-redirect>
</template>