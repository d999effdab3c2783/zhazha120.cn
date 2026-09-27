<script setup lang="ts">
	import type { SupportChannel } from '~/types/support'

	defineProps<{
		readonly items: SupportChannel[]
	}>()
</script>

<template>
	<n-tabs
		animated
		type="segment"
	>
		<template
			v-for="({ name, methods }, index) in items"
			:key="index"
		>
			<n-tab-pane
				:name="index"
				:tab="name"
			>
				<n-flex
					size="small"
					vertical
				>
					<template
						v-for="(methodItem, methodIndex) in methods"
						:key="methodIndex"
					>
						<n-card
							size="small"
							:title="methodItem.name"
						>
							<sections-support-methods :item="methodItem" />
						</n-card>
					</template>
				</n-flex>
			</n-tab-pane>
		</template>
	</n-tabs>
</template>