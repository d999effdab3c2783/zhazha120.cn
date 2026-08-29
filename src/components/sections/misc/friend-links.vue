<script lang="ts" setup>
	import { isNonNullish } from 'remeda';

	import CustomRedirectWrapper from '@/components/custom/redirect-wrapper.vue';

	const { isMobile } = useResponsive();
	const friendLinks = useFriendLinks();

	const processUrl = (href: string) => href.replace('{domain}', location.host);

	const extractHost = (href: string) => {
		try {
			const processedHref = processUrl(href);
			const url = new URL(processedHref);

			return url.host;
		} catch {}
	};
</script>

<template>
	<n-list>
		<template v-for="{ status, logo, name, description, href } in friendLinks">
			<n-list-item>
				<n-flex :size="0" :vertical="isMobile" justify="space-between">
					<n-flex :wrap="false" align="center" size="small">
						<n-image
							:img-props="{
								class: 'min-w-20 max-h-20',
							}"
							:src="logo"
							class="rounded"
						/>

						<n-flex size="small" vertical>
							<custom-redirect-wrapper :href="processUrl(href)">
								<template #default="{ redirect, aProps }">
									<n-button
										:class="{
											'opacity-50': status === 'dead',
										}"
										class="w-fit"
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

								<template v-if="status === 'dead'" #extra>
									<n-alert class="w-full" type="error">可能已经 忘记续费/关站</n-alert>
								</template>
							</custom-redirect-wrapper>

							<template v-if="isNonNullish(description)">
								<n-text :depth="3" class="leading-tight">
									{{ description }}
								</n-text>
							</template>
						</n-flex>
					</n-flex>

					<n-flex justify="end">
						<n-text :depth="3" class="text-([.8em] nowrap)">
							{{ extractHost(href) }}
						</n-text>
					</n-flex>
				</n-flex>
			</n-list-item>
		</template>
	</n-list>
</template>