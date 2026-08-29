<script lang="ts" setup>
	import { isNonNullish } from 'remeda';

	import CustomRedirectWrapper from '@/components/custom/redirect-wrapper.vue';
	import competitionsData from '@/data/dev/competitions' with { type: 'macro' };

	const { isMobile } = useResponsive();
</script>

<template>
	<n-list>
		<template v-for="{ name, year, href } in competitionsData">
			<n-list-item>
				<n-flex :size="0" :vertical="isMobile" justify="space-between">
					<template v-if="isNonNullish(href)">
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
									<n-text class="text-(current start wrap) leading-tight fw-bold">
										{{ name }}
									</n-text>
								</n-button>
							</template>
						</custom-redirect-wrapper>
					</template>

					<template v-else>
						<n-text class="text-(current start wrap) leading-tight fw-bold">
							{{ name }}
						</n-text>
					</template>

					<n-flex justify="end">
						<n-text :depth="3" class="text-([.8em] nowrap)">
							{{ year }}
						</n-text>
					</n-flex>
				</n-flex>
			</n-list-item>
		</template>
	</n-list>
</template>