<template>
	<n-flex
		size="small"
		vertical
	>
		<slot name="bio">
			<sections-dev-bio />
		</slot>

		<slot name="codetime">
			<sections-dev-codetime />
		</slot>

		<n-divider>技术栈</n-divider>

		<slot name="stacks">
			<sections-dev-stacks />
		</slot>

		<n-divider>技术履历</n-divider>

		<slot name="organizations">
			<sections-dev-organizations />
		</slot>

		<slot name="projects">
			<sections-dev-projects />
		</slot>

		<n-divider>技术挑战</n-divider>

		<slot name="competitions">
			<sections-dev-competitions />
		</slot>
	</n-flex>
</template>