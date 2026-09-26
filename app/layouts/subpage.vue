<script setup lang="ts">
	import { clsx } from 'clsx'
	import { computed, toValue } from 'vue'

	import { navigateTo, useRouter } from '#app'
	import { useResponsive } from '~/composables/responsive'

	const { isMobile } = useResponsive()
	const router = useRouter()

	const containerClassNames = computed(() => {
		return clsx(
			'px-2 container min-h-screen',
			{
				'mt-10': isMobile
			},
			{
				'mt-20': !isMobile
			}
		)
	})

	const handleBack = async () => {
		if (history.length > 1) {
			router.back()
			return
		}

		await navigateTo({
			path: '/'
		})
	}
</script>

<template>
	<nuxt-layout name="default">
		<custom-position
			cover
			placement="center"
		>
			<n-flex
				:class="containerClassNames"
				size="large"
				vertical
			>
				<n-page-header
					:title="String(toValue($route.meta.title) ?? $route.fullPath)"
					@back="handleBack"
				/>

				<n-element>
					<slot />
				</n-element>
			</n-flex>
		</custom-position>
	</nuxt-layout>
</template>