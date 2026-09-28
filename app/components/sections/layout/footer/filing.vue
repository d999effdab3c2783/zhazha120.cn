<script setup lang="ts">
	import { useFooterStore } from '~/stores/footer'

	const footerStore = useFooterStore()
</script>

<template>
	<n-flex
		:size="0"
		vertical
	>
		<custom-redirect
			#="{ aProps, redirect }"
			:href="footerStore.filing.icp.href"
		>
			<n-button
				v-bind="aProps"
				class="fw-bold"
				tag="a"
				text
				type="primary"
				@click.prevent="redirect"
			>
				{{ footerStore.filing.icp.text }}
			</n-button>
		</custom-redirect>

		<custom-redirect
			#="{ aProps, redirect }"
			:href="footerStore.filing.safety.href"
		>
			<n-button
				class="fw-bold"
				:style="{
					'--n-icon-margin': '-.1em .1em 0 0'
				}"
				v-bind="aProps"
				tag="a"
				text
				type="primary"
				@click.prevent="redirect"
			>
				<template #icon>
					<n-image
						:img-props="{
							class: 'h-full'
						}"
						:src="footerStore.filing.safety.icon"
						@click.prevent.stop
					/>
				</template>

				{{ footerStore.filing.safety.text }}
			</n-button>
		</custom-redirect>
	</n-flex>
</template>