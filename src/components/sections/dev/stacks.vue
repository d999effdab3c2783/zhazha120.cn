<script lang="ts" setup>
	import { prop, sortBy } from 'remeda';

	const stacks = await useDevStacks();

	const sortedStacks = sortBy(stacks, (stack) => prop(stack, 'sort') ?? Number.POSITIVE_INFINITY);
</script>

<template>
	<custom-naive-ui-auto-stack>
		<template v-for="{ name, items } in sortedStacks">
			<n-card :title="name" class="flex-1" content-class="!pb-0" size="small">
				<n-list size="small" wrap>
					<template v-for="{ name, icon, href } in items">
						<n-list-item>
							<custom-naive-ui-horizontal-stack :wrap="false" align="center">
								<n-icon :class="icon" class="size-6" />

								<custom-naive-ui-redirect-button
									:href="href"
									class="size-fit"
									tag="a"
									text
									type="primary"
								>
									<custom-naive-ui-text-stack>
										<n-text class="text-current fw-bold">
											{{ name }}
										</n-text>
									</custom-naive-ui-text-stack>
								</custom-naive-ui-redirect-button>
							</custom-naive-ui-horizontal-stack>
						</n-list-item>
					</template>
				</n-list>
			</n-card>
		</template>
	</custom-naive-ui-auto-stack>
</template>