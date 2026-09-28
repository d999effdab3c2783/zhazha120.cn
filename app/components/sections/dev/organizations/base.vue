<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'
	import type { ButtonProps } from 'naive-ui'

	import type { BaseDevOrganization } from '~/types/dev'

	defineProps<
		{
			readonly item: BaseDevOrganization
			readonly href: string
		} & Partial<{
			readonly peers: Partial<{
				readonly button: ButtonProps &
					Partial<{
						readonly class: string
					}>
			}>
		}>
	>()
</script>

<template>
	<custom-redirect :href="href">
		<template #default="{ aProps, redirect }">
			<n-button
				secondary
				tag="a"
				v-bind="{
					aProps,
					...(isNotNil(peers) ? peers.button : {})
				}"
				@click.prevent="redirect"
			>
				<template #icon>
					<slot name="icon" />
				</template>

				<slot>{{ item.name }}</slot>
			</n-button>
		</template>
	</custom-redirect>
</template>