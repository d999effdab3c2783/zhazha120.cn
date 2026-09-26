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
			:href="footerStore.version.hashHref"
		>
			<n-button
				v-bind="aProps"
				class="fw-bold"
				:style="{
					'--n-icon-margin': '0 .1em 0 0'
				}"
				tag="a"
				text
				type="primary"
				@click.prevent="redirect"
			>
				<template #icon>
					<n-icon class="i-tabler:git-commit text-white" />
				</template>

				{{ footerStore.version.shortHash }}
			</n-button>
		</custom-redirect>

		<custom-redirect
			#="{ aProps, redirect }"
			:href="footerStore.version.branchHref"
		>
			<n-button
				class="fw-bold"
				:style="{
					'--n-icon-margin': '0 .1em 0 0'
				}"
				v-bind="aProps"
				tag="a"
				text
				type="primary"
				@click.prevent="redirect"
			>
				<template #icon>
					<n-icon class="i-tabler:git-branch text-white" />
				</template>

				{{ footerStore.version.branch }}
			</n-button>
		</custom-redirect>
	</n-flex>
</template>