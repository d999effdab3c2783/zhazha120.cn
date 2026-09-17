<script lang="ts" setup>
	import { useElementVisibility, usePageLeave } from '@vueuse/core'
	import { useThemeVars } from 'naive-ui'
	import { computed, useTemplateRef } from 'vue'

	const themeVars = useThemeVars()
	const containerRef = useTemplateRef('containerRef')
	const pageLeave = usePageLeave()
	const elementVisibility = useElementVisibility(containerRef)

	const show = computed(() => {
		return !pageLeave.value && elementVisibility.value
	})
</script>

<template>
	<n-element
		ref="containerRef"
		class="size-full"
	>
		<transition
			appear
			mode="out-in"
			name="v-fade"
		>
			<template v-if="show">
				<vue-bits-dot-grid
					:active-color="themeVars.primaryColor"
					:base-color="themeVars.hoverColor"
					:dot-size="6"
					:gap="18"
				/>
			</template>
		</transition>
	</n-element>
</template>

<style lang="scss">
	@use '~/styles/transitions/fade';
</style>