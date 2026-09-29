<script setup lang="ts">
	import { useResponsive } from '~/composables/responsive'
	import { useFurryStore } from '~/stores/furry'

	const { isMobile } = useResponsive()

	const furryStore = useFurryStore()
</script>

<template>
	<n-card
		size="small"
		title="探索"
	>
		<n-flex size="small">
			<template
				v-for="({ icon, name, href }, index) in furryStore.portals"
				:key="index"
			>
				<custom-redirect
					#="{ aProps, redirect }"
					:href="href"
				>
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
				</custom-redirect>
			</template>
		</n-flex>
	</n-card>
</template>