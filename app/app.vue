<template>
	<nuxt-error-boundary>
		<nuxt-layout>
			<nuxt-page />
		</nuxt-layout>

		<template #error="props">
			<app-error v-bind="props" />
		</template>
	</nuxt-error-boundary>
</template>