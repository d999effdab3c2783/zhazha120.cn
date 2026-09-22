<script setup lang="ts">
	import { useFooterStore } from '~/stores/footer'

	const footerStore = useFooterStore()
</script>

<template>
	<n-flex
		:size="0"
		vertical
	>
		<n-button
			class="fw-bold"
			:href="footerStore.filing.icp.href"
			tag="a"
			text
			type="primary"
		>
			{{ footerStore.filing.icp.text }}
		</n-button>

		<n-button
			class="fw-bold"
			:href="footerStore.filing.safety.href"
			:style="{
				'--n-icon-margin': '-.1em .1em 0 0'
			}"
			tag="a"
			text
			type="primary"
		>
			<template #icon>
				<n-image
					:img-props="{
						class: 'h-full'
					}"
					:src="footerStore.filing.safety.icon"
				/>
			</template>

			{{ footerStore.filing.safety.text }}
		</n-button>
	</n-flex>
</template>