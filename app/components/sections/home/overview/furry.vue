<script lang="ts" setup>
	import { isNil, isNotNil, uniq } from 'es-toolkit'
	import { computed } from 'vue'

	import { useResponsive } from '~/composables/responsive'
	import { useFurryStore } from '~/stores/furry'

	const furryStore = useFurryStore()

	const { isMobile } = useResponsive()

	const uniqueCharactersOwners = computed(() => {
		return uniq(
			furryStore.characters
				.map(item => {
					if (isNil(item.owner)) {
						return null
					}

					return item.owner.name
				})
				.filter(item => {
					return isNotNil(item)
				})
		)
	})

	await furryStore.loadCharacters()
	await furryStore.loadEvents()
</script>

<template>
	<n-card
		size="small"
		title="福瑞"
	>
		<n-flex
			size="small"
			vertical
		>
			<n-divider class="!mt-0" />

			<n-flex
				align="center"
				size="large"
				:vertical="isMobile"
			>
				<n-statistic label="设定集"
					>{{ uniqueCharactersOwners.length }} 人 / {{ furryStore.characters.length }} 只</n-statistic
				>

				<template v-if="!isMobile">
					<n-divider vertical />
				</template>

				<n-statistic label="参与活动">{{ furryStore.events.length }} 场</n-statistic>
			</n-flex>
		</n-flex>

		<template #footer>
			<n-flex
				class="n-button__patch"
				size="small"
				:vertical="isMobile"
			>
				<custom-redirect
					#="{ aProps, redirect }"
					href="/furry"
				>
					<n-button
						block
						tag="a"
						type="primary"
						v-bind="aProps"
						@click.prevent="redirect"
					>
						<template #icon>
							<n-icon class="i-tabler:paw" />
						</template>

						了解更多
					</n-button>
				</custom-redirect>
			</n-flex>
		</template>
	</n-card>
</template>