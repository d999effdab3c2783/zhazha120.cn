<template>
	<n-element class="relative h-screen">
		<n-element class="absolute top-0 left-0 size-full">
			<SectionsHome1Background />
		</n-element>

		<NaivePosition class="relative size-full" placement="center">
			<SectionsHome1Intro />
		</NaivePosition>

		<n-element class="absolute bottom-12 left-1/2 -translate-x-1/2">
			<SectionsHome1DownIndicator />
		</n-element>
	</n-element>
</template>