<template>
	<n-element class="min-h-screen relative">
		<n-element class="pt-30 px-2 container mx-auto">
			<custom-naive-ui-vertical-stack>
				<n-divider dashed>
					<n-text class="text-8 fw-bold">开发</n-text>
				</n-divider>

				<sections-index-2-dev-description />
				<sections-index-2-dev-codetime />

				<n-divider>技术栈</n-divider>

				<sections-index-2-dev-stacks />

				<n-divider>技术履历</n-divider>

				<sections-index-2-dev-organizations />
				<sections-index-2-dev-projects />

				<n-divider>技术挑战</n-divider>

				<sections-index-2-dev-competitions />
			</custom-naive-ui-vertical-stack>
		</n-element>
	</n-element>
</template>