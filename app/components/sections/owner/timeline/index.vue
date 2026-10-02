<template>
	<n-flex
		size="small"
		vertical
	>
		<slot name="bio">
			<sections-owner-timeline-bio />
		</slot>

		<slot name="current">
			<sections-owner-timeline-current />
		</slot>
	</n-flex>
</template>