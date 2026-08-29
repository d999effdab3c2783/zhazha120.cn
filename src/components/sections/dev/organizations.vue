<script lang="ts" setup>
	import type { Organization } from '@/data/dev/organizations';

	import CustomRedirectWrapper from '@/components/custom/redirect-wrapper.vue';

	const { isMobile } = useResponsive();
	const organizations = useDevOrganizations();

	const generateUrl = (organization: Organization) => {
		switch (organization.type) {
			case 'github':
				return `https://github.com/orgs/${organization.owner}`;
			case 'custom':
				return organization.href;
		}
	};
</script>

<template>
	<n-list>
		<template v-for="organization in organizations">
			<n-list-item>
				<n-flex :size="0" :vertical="isMobile" justify="space-between">
					<n-flex :wrap="false" align="center" size="small">
						<template v-if="organization.type === 'github'">
							<n-image :src="organization.avatar" class="size-10 rounded" />
						</template>

						<template v-else>
							<n-icon class="size-10 i-ant-design:link-outlined" />
						</template>

						<custom-redirect-wrapper :href="generateUrl(organization)">
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
									<n-text class="text-(current start wrap) fw-bold">
										{{ organization.name }}
									</n-text>
								</n-button>
							</template>
						</custom-redirect-wrapper>
					</n-flex>

					<template v-if="organization.type === 'github'">
						<n-flex justify="end">
							<n-text :depth="3" class="text-([.8em] nowrap)">
								{{ organization.owner }}
							</n-text>
						</n-flex>
					</template>
				</n-flex>
			</n-list-item>
		</template>
	</n-list>
</template>