<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'

	import { useOwnerStore } from '~/stores/owner'
	import type { OwnerContact } from '~/types/owner'

	const ownerStore = useOwnerStore()
</script>

<template>
	<n-card
		size="small"
		title="联系方式"
	>
		<n-flex size="small">
			<template
				v-for="({ icon, name, href, comment }, index) in ownerStore.contacts as OwnerContact[]"
				:key="index"
			>
				<custom-redirect :href="href">
					<template #default="{ aProps, redirect }">
						<n-button
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

					<template
						v-if="isNotNil(comment)"
						#footer
					>
						<n-element class="text-center">
							<n-text class="whitespace-pre-line">{{ comment }}</n-text>
						</n-element>
					</template>
				</custom-redirect>
			</template>
		</n-flex>
	</n-card>
</template>