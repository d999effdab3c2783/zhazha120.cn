<template>
	<n-flex
		size="small"
		vertical
	>
		<slot name="notes">
			<sections-furry-notes />
		</slot>

		<slot name="portals">
			<sections-furry-portals />
		</slot>
	</n-flex>
</template>