<script lang="ts" setup>
	import { isNonNullish } from 'remeda';

	import competitionsData from '@/data/dev/competitions' with { type: 'macro' };

	const { isMobile } = useResponsive();
</script>

<template>
	<n-list>
		<template v-for="{ name, award, group, year, href } in competitionsData">
			<n-list-item>
				<custom-naive-ui-list-thing>
					<custom-naive-ui-horizontal-stack align="center">
						<custom-naive-ui-text-stack>
							<n-text>{{ name }}</n-text>
							<n-text :depth="3">{{ group }}</n-text>
						</custom-naive-ui-text-stack>

						<template v-if="isNonNullish(href)">
							<custom-naive-ui-redirect-button :href="href" tag="a" text type="primary">
								<n-tag class="fw-bold" type="primary">{{ award }}</n-tag>
							</custom-naive-ui-redirect-button>
						</template>

						<template v-else>
							<n-tag>{{ award }}</n-tag>
						</template>
					</custom-naive-ui-horizontal-stack>

					<template #suffix>
						<n-text
							:class="[
								'text-[.8em]',
								{
									'mt-2': isMobile,
								},
							]"
							:depth="3"
						>
							{{ year }}
						</n-text>
					</template>
				</custom-naive-ui-list-thing>
			</n-list-item>
		</template>
	</n-list>
</template>