<script lang="ts" setup>
	import { computed } from 'vue'

	import { useResponsive } from '~/composables/responsive'
	import type { FriendEntry } from '~/types/friend'

	const props = defineProps<{
		readonly item: FriendEntry
	}>()

	const portals = computed(() => {
		const result = []

		if (props.item.diving_fish_maimai_username) {
			result.push({
				icon: 'i-custom:maimai',
				name: '舞萌 (maimai) | b50',
				href: `/friends/${props.item.slug}/game/records/maimai/b50`
			})
		}

		return result
	})

	const { isMobile } = useResponsive()
</script>

<template>
	<n-card
		size="small"
		title="探索"
	>
		<n-flex
			class="n-button__patch"
			size="small"
			:vertical="isMobile"
		>
			<template
				v-for="({ icon, name, href }, index) in portals"
				:key="index"
			>
				<custom-redirect :href="href">
					<template #default="{ aProps, redirect }">
						<n-button
							:block="isMobile"
							tag="a"
							v-bind="aProps"
							@click.prevent="redirect"
						>
							<template #icon>
								<n-icon :class="icon" />
							</template>

							{{ name }}
						</n-button>
					</template>
				</custom-redirect>
			</template>
		</n-flex>
	</n-card>
</template>

<style lang="scss">
	@use '~/styles/patches';
</style>