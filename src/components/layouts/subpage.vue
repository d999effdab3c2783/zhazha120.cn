<script lang="ts" setup>
	import { isNonNullish } from 'remeda'

	import profileData from '@/data/self/profile' with { type: 'macro' }

	const { isMobile } = useResponsive()
	const router = useRouter()

	const handleBack = () => {
		if (1 >= history.length) {
			router.push('/')
			return
		}

		router.back()
	}

	const breadcrumbs = computed(() => {
		const parts = router.currentRoute.value.path.split('/')

		return parts.map((part, index) => {
			const currentPath = parts.slice(0, index + 1).join('/')

			if (0 === index) {
				return {
					title: profileData.name,
					path: '/'
				}
			}

			const title = router.resolve(currentPath).meta.title ?? part

			if (index === parts.length - 1) {
				return {
					title,
					path: undefined
				}
			}

			return {
				title,
				path: currentPath
			}
		})
	})
</script>

<template>
	<layouts-default>
		<n-element class="min-h-screen relative">
			<n-element
				:class="[
					'container mx-auto px-2 pb-2',
					{
						'pt-5': isMobile
					},
					{
						'pt-10': !isMobile
					}
				]"
			>
				<custom-naive-ui-vertical-stack size="large">
					<n-scrollbar data-lenis-prevent x-scrollable>
						<n-page-header @back="handleBack">
							<template #title>
								<n-breadcrumb>
									<template v-for="{ title, path } in breadcrumbs">
										<template v-if="isNonNullish(path)">
											<custom-naive-ui-redirect-wrapper :href="path">
												<template #default="{ href, redirect }">
													<n-breadcrumb-item :href="href" @click.prevent="redirect">
														{{ title }}
													</n-breadcrumb-item>
												</template>
											</custom-naive-ui-redirect-wrapper>
										</template>

										<template v-else>
											<n-breadcrumb-item :clickable="false">{{ title }}</n-breadcrumb-item>
										</template>
									</template>
								</n-breadcrumb>
							</template>
						</n-page-header>
					</n-scrollbar>

					<n-element>
						<slot />
					</n-element>
				</custom-naive-ui-vertical-stack>
			</n-element>
		</n-element>
	</layouts-default>
</template>