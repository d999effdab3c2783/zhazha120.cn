<template>
	<nuxt-error-boundary>
		<nuxt-layout>
			<nuxt-page />
		</nuxt-layout>
	</nuxt-error-boundary>
</template>

<style lang="scss">
	@font-face {
		font-family: 'v-zhazha120-script';
		src: local('YoZai');
	}

	@font-face {
		font-family: 'v-zhazha120-sans';
		src: local('Xiaolai'), local('HarmonyOS Sans SC'), local('DingTalk JinBuTi');
	}

	body {
		@apply font-[v-zhazha120-sans];
	}
</style>