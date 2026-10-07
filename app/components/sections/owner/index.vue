<template>
	<n-flex
		size="small"
		vertical
	>
		<slot name="notes">
			<sections-owner-notes />
		</slot>

		<slot name="contacts">
			<sections-owner-contacts />
		</slot>

		<slot name="portals">
			<sections-owner-portals />
		</slot>
	</n-flex>
</template>