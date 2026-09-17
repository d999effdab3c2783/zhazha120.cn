<script lang="ts" setup>
	import { useRouter } from 'nuxt/app'

	import { useResponsive } from '~/composables/responsive'

	const { isMobile } = useResponsive()
	const router = useRouter()

	const handleBack = () => {
		if (history.length > 1) {
			router.back()
			return
		}

		router.push('/')
	}
</script>

<template>
	<nuxt-layout name="default">
		<n-element class="container">
			<n-flex justify="center">
				<n-element
					:class="[
						'p-2',
						{
							'mt-12': !isMobile
						}
					]"
				>
					<n-flex
						size="small"
						vertical
					>
						<n-page-header
							:title="String($route.name ?? $route.fullPath)"
							@back="handleBack"
						/>

						<n-element>
							<slot />
						</n-element>
					</n-flex>
				</n-element>
			</n-flex>
		</n-element>
	</nuxt-layout>
</template>