<script setup lang="ts">
	import { useFooterStore } from '~/stores/footer'

	const footerStore = useFooterStore()
</script>

<template>
	<n-flex
		:size="0"
		vertical
	>
		<n-popover>
			<template #trigger>
				<n-button
					class="fw-bold"
					:href="footerStore.version.hashHref"
					:style="{
						'--n-icon-margin': '0 .1em 0 0'
					}"
					tag="a"
					text
					type="primary"
				>
					<template #icon>
						<n-icon class="i-tabler:git-commit text-white" />
					</template>

					{{ footerStore.version.shortHash }}
				</n-button>
			</template>

			{{ footerStore.version.hash }}
		</n-popover>

		<n-button
			class="fw-bold"
			:href="footerStore.version.branchHref"
			:style="{
				'--n-icon-margin': '0 .1em 0 0'
			}"
			tag="a"
			text
			type="primary"
		>
			<template #icon>
				<n-icon class="i-tabler:git-branch text-white" />
			</template>

			{{ footerStore.version.branch }}
		</n-button>
	</n-flex>
</template>