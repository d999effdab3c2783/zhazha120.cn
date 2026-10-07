<template>
	<n-flex
		size="small"
		vertical
	>
		<slot name="notes">
			<sections-owner-timeline-notes />
		</slot>

		<slot name="current">
			<sections-owner-timeline-current />
		</slot>
	</n-flex>
</template>