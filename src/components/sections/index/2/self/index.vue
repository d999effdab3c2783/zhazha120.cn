<template>
	<n-element class="min-h-screen relative">
		<n-element class="pt-30 px-2 container mx-auto">
			<custom-naive-ui-vertical-stack>
				<n-divider dashed>
					<n-text class="text-8 fw-bold">本体</n-text>
				</n-divider>

				<sections-index-2-self-description />

				<n-divider />

				<sections-index-2-self-contacts />
				<sections-index-2-self-portals />
			</custom-naive-ui-vertical-stack>
		</n-element>
	</n-element>
</template>