<template>
	<n-flex
		size="small"
		vertical
	>
		<slot name="bio">
			<sections-furry-bio />
		</slot>

		<slot name="portals">
			<sections-furry-portals />
		</slot>
	</n-flex>
</template>