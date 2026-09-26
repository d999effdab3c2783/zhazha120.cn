<template>
	<n-flex
		size="small"
		vertical
	>
		<slot name="bio">
			<sections-owner-bio />
		</slot>

		<slot name="contacts">
			<sections-owner-contacts />
		</slot>

		<slot name="portals">
			<sections-owner-portals />
		</slot>
	</n-flex>
</template>