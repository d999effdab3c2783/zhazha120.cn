<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'
	import { shallowRef } from 'vue'

	import type { FurryCharacterEntry } from '~/types/furry'

	defineProps<{
		readonly item: FurryCharacterEntry
	}>()

	const showSlug = shallowRef(false)
</script>

<template>
	<n-card size="small">
		<n-split
			:default-size="0.2"
			direction="horizontal"
		>
			<template #1>
				<n-image :src="item.illustration" />
			</template>

			<template #2>
				<n-flex
					class="pl-2 flex-1 size-full"
					size="small"
					vertical
				>
					<n-flex
						:size="0"
						vertical
					>
						<n-flex
							align="center"
							:size="0"
						>
							<n-text
								class="text-[1.6em] fw-black hover:cursor-help"
								@click="showSlug = !showSlug"
							>
								{{ item.name }}
							</n-text>

							<template v-if="isNotNil(item.species_alias)">
								<n-divider vertical />

								<n-text type="info">物种: {{ item.species_alias }}</n-text>
							</template>
						</n-flex>

						<n-collapse-transition :show="isNotNil(item.slug) && showSlug">
							<n-text
								class="text-[.8em]"
								:depth="3"
							>
								{{ item.slug }}

								<template v-if="isNotNil(item.aliases)">: {{ item.aliases.join(', ') }}</template>
							</n-text>
						</n-collapse-transition>
					</n-flex>

					<n-flex size="small">
						<template
							v-for="({ name, percent }, index) in item.species"
							:key="index"
						>
							<n-tag>{{ percent }}% {{ name }}</n-tag>
						</template>
					</n-flex>

					<template v-if="isNotNil(item.description)">
						<n-h4
							class="!mt-4"
							prefix="bar"
						>
							{{ item.description }}
						</n-h4>
					</template>

					<slot name="extra" />
				</n-flex>
			</template>
		</n-split>

		<template
			v-if="isNotNil(item.owner)"
			#action
		>
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
	</n-card>
</template>