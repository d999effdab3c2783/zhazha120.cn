<script setup lang="ts">
	import { useRouteParams } from '@vueuse/router'
	import { isNil, isNotNil } from 'es-toolkit'
	import { computed } from 'vue'

	import { definePageMeta } from '#app/composables/pages'
	import { useFurryStore } from '~/stores/furry'
	import { filterArray } from '~/utils/filter'

	definePageMeta({
		layout: 'subpage',
		title: '行程详情'
	})

	const slug = useRouteParams('slug', null, {
		mode: 'push',
		transform: String
	})

	const year = useRouteParams('year', null, {
		mode: 'push',
		transform: Number
	})

	const furryStore = useFurryStore()

	const event = computed(() => {
		return furryStore.events.find(item => {
			return item.slug === slug.value && item.year === year.value
		})
	})

	const characters = computed(() => {
		if (isNil(event.value) || isNil(event.value.charactersQuery)) {
			return null
		}

		return filterArray(furryStore.characters, event.value.charactersQuery)
	})

	await furryStore.loadCharacters()
	await furryStore.loadEvents()
</script>

<template>
	<template v-if="isNotNil(event)">
		<n-flex
			size="small"
			vertical
		>
			<sections-furry-events-item :item="event">
				<template #extra>
					<sections-furry-events-buttons :item="event">
						<template #detail>
							<n-element class="hidden" />
						</template>
					</sections-furry-events-buttons>
				</template>
			</sections-furry-events-item>

			<template v-if="isNotNil(characters)">
				<n-divider>出的设定</n-divider>

				<transition-group
					appear
					name="v-fade"
				>
					<template
						v-for="item in characters"
						:key="[item.slug, item.name].join(' - ')"
					>
						<n-element :style="{ '--v-fade-leave-duration': 0 }">
							<sections-furry-characters-item :item="item">
								<template #extra>
									<sections-furry-characters-buttons :item="item" />
								</template>
							</sections-furry-characters-item>
						</n-element>
					</template>
				</transition-group>
			</template>

			<template v-if="isNotNil(event.renderExtra)">
				<n-divider />

				<n-element>
					<component :is="event.renderExtra()" />
				</n-element>
			</template>
		</n-flex>
	</template>

	<template v-else>
		<n-card size="small">
			<n-empty />
		</n-card>
	</template>
</template>

<style lang="scss">
	@use '~/styles/transitions/fade';
</style>