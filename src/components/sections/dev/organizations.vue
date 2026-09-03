<script lang="ts" setup>
	import type { Organization } from '@/data/dev/organizations';

	const organizations = await useDevOrganizations();

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
				<custom-naive-ui-list-thing>
					<template #prefix>
						<template v-if="organization.type === 'github'">
							<n-image :src="organization.avatar" class="size-10 rounded" />
						</template>

						<template v-if="organization.type === 'custom'">
							<n-icon class="size-10 i-ant-design:link-outlined" />
						</template>
					</template>

					<custom-naive-ui-redirect-button
						:href="generateUrl(organization)"
						class="size-fit"
						tag="a"
						text
						type="primary"
					>
						<custom-naive-ui-text-stack>
							<n-text class="text-current fw-bold">
								{{ organization.name }}
							</n-text>
						</custom-naive-ui-text-stack>
					</custom-naive-ui-redirect-button>

					<template #suffix>
						<template v-if="organization.type === 'github'">
							<n-text :depth="3" class="text-[.8em]">
								{{ organization.owner }}
							</n-text>
						</template>
					</template>
				</custom-naive-ui-list-thing>
			</n-list-item>
		</template>
	</n-list>
</template>