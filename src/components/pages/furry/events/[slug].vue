<script lang="ts" setup>
	import { useRouteParams } from '@vueuse/router';
	import { isNonNullish } from 'remeda';

	definePage({
		meta: {
			title: '详情',
			layout: 'subpage',
		},
	});

	const events = useFurryEvents();
	const slug = useRouteParams('slug', undefined, {
		mode: 'replace',
		transform: String,
	});

	const event = computed(() => {
		return events[slug.value];
	});
</script>

<template>
	<custom-naive-ui-vertical-stack>
		<n-card size="small">
			<template v-if="isNonNullish(event)" #cover>
				<n-image :src="event.banner" />
			</template>

			<template v-if="isNonNullish(event)">
				<n-element class="mt-2">
					<custom-naive-ui-auto-stack justify="space-between">
						<template v-if="isNonNullish(event.href)">
							<custom-naive-ui-redirect-button :href="event.href" tag="a" text type="primary">
								<custom-naive-ui-text-stack>
									<n-text class="text-(current [1.2em]) fw-bold">{{ event.fullName }}</n-text>
								</custom-naive-ui-text-stack>
							</custom-naive-ui-redirect-button>
						</template>

						<template v-else>
							<custom-naive-ui-text-stack class="leading-none">
								<n-text class="text-[1.2em]">{{ event.fullName }}</n-text>
							</custom-naive-ui-text-stack>
						</template>

						<n-text :depth="3" class="text-[.8em]">
							{{ new Date(event.startDate).toLocaleDateString() }}
							-
							{{ new Date(event.endDate).toLocaleDateString() }}
						</n-text>
					</custom-naive-ui-auto-stack>
				</n-element>
			</template>

			<template v-else>
				<n-empty />
			</template>
		</n-card>

		<n-divider>出的设定</n-divider>

		<template v-for="character in event.characters">
			<sections-furry-character-card v-bind="character" />
		</template>
	</custom-naive-ui-vertical-stack>
</template>