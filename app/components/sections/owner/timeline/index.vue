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

		<n-divider>往年生日</n-divider>

		<slot name="birthdays">
			<sections-owner-timeline-birthdays />
		</slot>
	</n-flex>
</template>