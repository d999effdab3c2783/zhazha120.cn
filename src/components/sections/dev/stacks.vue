<script lang="ts" setup>
	import { prop, sortBy } from 'remeda';

	import CustomRedirectWrapper from '@/components/custom/redirect-wrapper.vue';

	const { isMobile } = useResponsive();
	const stacks = useDevStacks();

	const sortedStacks = sortBy(stacks, (stack) => prop(stack, 'sort') ?? Number.POSITIVE_INFINITY);
</script>

<template>
	<n-flex :vertical="isMobile" size="small" wrap>
		<template v-for="{ name, items } in sortedStacks">
			<n-card :title="name" class="flex-1" content-class="!pb-0" size="small">
				<n-list size="small" wrap>
					<template v-for="{ name, icon, href } in items">
						<n-list-item>
							<n-flex :wrap="false" align="center" size="small">
								<n-icon :class="icon" class="size-6" />

								<custom-redirect-wrapper :href="href">
									<template #default="{ redirect, aProps }">
										<n-button
											size="small"
											tag="a"
											text
											type="primary"
											v-bind="aProps"
											@click.prevent="redirect"
										>
											<n-text class="text-(current start wrap) fw-bold">
												{{ name }}
											</n-text>
										</n-button>
									</template>
								</custom-redirect-wrapper>
							</n-flex>
						</n-list-item>
					</template>
				</n-list>
			</n-card>
		</template>
	</n-flex>
</template>