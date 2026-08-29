<script lang="ts" setup>
	import { isNonNullish } from 'remeda';

	import type { Competition } from '@/data/dev/competitions';

	import CustomRedirectWrapper from '@/components/custom/redirect-wrapper.vue';
	import competitionsData from '@/data/dev/competitions' with { type: 'macro' };

	const { isMobile } = useResponsive();
	const { define: CompetitionDefine, reuse: Competition } = createReusableTemplate<Competition>();
</script>

<template>
	<CompetitionDefine>
		<template #default="{ name, group, award }">
			<n-element class="leading-tight">
				<n-flex :align="isMobile ? 'start' : 'center'" :vertical="isMobile" size="small">
					<n-text class="text-current fw-bold">{{ name }}</n-text>
					<n-text :depth="3" class="text-[.8em]">{{ group }}</n-text>
					<n-text class="fw-bold">{{ award }}</n-text>
				</n-flex>
			</n-element>
		</template>
	</CompetitionDefine>

	<n-list>
		<template v-for="competition in competitionsData">
			<n-list-item>
				<n-flex :size="0" :vertical="isMobile" justify="space-between">
					<template v-if="isNonNullish(competition.href)">
						<custom-redirect-wrapper :href="competition.href">
							<template #default="{ redirect, aProps }">
								<n-button
									class="w-fit"
									size="small"
									tag="a"
									text
									type="primary"
									v-bind="aProps"
									@click.prevent="redirect"
								>
									<Competition v-bind="competition" />
								</n-button>
							</template>
						</custom-redirect-wrapper>
					</template>

					<template v-else>
						<Competition v-bind="competition" />
					</template>

					<n-flex justify="end">
						<n-text :depth="3" class="text-([.8em] nowrap)">
							{{ competition.year }}
						</n-text>
					</n-flex>
				</n-flex>
			</n-list-item>
		</template>
	</n-list>
</template>