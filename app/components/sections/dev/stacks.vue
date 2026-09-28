<script setup lang="ts">
	import { sortBy } from 'es-toolkit'

	import { useResponsive } from '~/composables/responsive'
	import { useDevStore } from '~/stores/dev'

	const devStore = useDevStore()

	const { isMobile } = useResponsive()

	await devStore.loadStacks()
</script>

<template>
	<n-flex
		size="small"
		:vertical="isMobile"
	>
		<template
			v-for="({ name, items }, index) in sortBy(devStore.stacks, ['sort'])"
			:key="index"
		>
			<n-card
				size="small"
				:title="name"
			>
				<n-flex size="small">
					<template
						v-for="({ icon, name: itemName, href }, itemIndex) in items"
						:key="itemIndex"
					>
						<custom-redirect
							#="{ aProps, redirect }"
							:href="href"
						>
							<n-button
								secondary
								tag="a"
								v-bind="aProps"
								@click.prevent="redirect"
							>
								<template #icon>
									<n-icon :class="icon" />
								</template>

								{{ itemName }}
							</n-button>
						</custom-redirect>
					</template>
				</n-flex>
			</n-card>
		</template>
	</n-flex>
</template>