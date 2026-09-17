<template>
	<nuxt-layout name="app">
		<vue-bits-click-spark class="[&>canvas]:z-120">
			<n-element class="min-h-screen">
				<slot />
			</n-element>
		</vue-bits-click-spark>
	</nuxt-layout>
</template>