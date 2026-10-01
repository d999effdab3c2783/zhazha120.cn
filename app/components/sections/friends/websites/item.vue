<script setup lang="ts">
	import { clsx } from 'clsx'
	import { intersection, isNotNil } from 'es-toolkit'
	import { computed } from 'vue'

	import { useResponsive } from '~/composables/responsive'
	import type { FriendWebsite } from '~/types/friend'

	const props = defineProps<{
		readonly item: FriendWebsite
	}>()

	const { isMobile } = useResponsive()

	const invalid = computed(() => {
		return isNotNil(props.item.tags) && intersection(props.item.tags, ['down', 'missing']).length > 0
	})

	const buttonClassNames = computed(() => {
		return clsx({
			'opacity-50': invalid.value
		})
	})
</script>

<template>
	<custom-redirect
		:href="item.href"
		:rel="invalid ? ['noreferrer', 'nofollow'] : []"
	>
		<template #default="{ aProps, redirect }">
			<n-button
				v-bind="aProps"
				:block="isMobile"
				class="text-start whitespace-pre-line"
				:class="buttonClassNames"
				secondary
				tag="a"
				@click.prevent="redirect"
			>
				<template #icon>
					<slot name="icon">
						<n-image
							class="h-full"
							:src="item.logo"
							@click.prevent.stop
						/>
					</slot>
				</template>

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
						{{ item.description }}
					</n-text>
				</n-flex>
			</n-button>
		</template>

		<template
			v-if="isNotNil(item.tags)"
			#footer
		>
			<sections-friends-websites-tags :item="item" />
		</template>
	</custom-redirect>
</template>