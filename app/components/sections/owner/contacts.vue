<script setup lang="ts">
	import { isNil } from 'es-toolkit'

	import { useOwnerStore } from '~/stores/owner'
	import type { OwnerContact } from '~/types/owner'

	const ownerStore = useOwnerStore()
</script>

<template>
	<n-card
		size="small"
		title="联系方式"
	>
		<n-flex
			align="center"
			size="small"
		>
			<template
				v-for="({ icon, name, href, comment }, index) in ownerStore.contacts as OwnerContact[]"
				:key="index"
			>
				<n-popover
					class="whitespace-pre-line"
					:disabled="isNil(comment)"
				>
					<template #trigger>
						<n-button
							:href="href"
							tag="a"
						>
							<template #icon>
								<n-icon :class="icon" />
							</template>

							{{ name }}
						</n-button>
					</template>

					{{ comment }}
				</n-popover>
			</template>
		</n-flex>
	</n-card>
</template>