<script lang="ts" setup>
	import CustomRedirectWrapper from '@/components/custom/redirect-wrapper.vue';
	import { isNonNullish } from 'remeda';

	const { isMobile } = useResponsive();
	const friendLinks = useFriendLinks();

	const processUrl = (href: string) => href.replace('{domain}', location.host);
</script>

<template>
	<n-flex :vertical="isMobile" size="small" wrap>
		<template v-for="{ status, logo, name, description, href } in friendLinks">
			<custom-redirect-wrapper :href="processUrl(href)">
				<template #default="{ redirect, aProps }">
					<n-button
						:block="isMobile"
						:secondary="status === 'dead'"
						class="flex-1 h-full py-2"
						size="small"
						tag="a"
						v-bind="aProps"
						@click.prevent="redirect"
					>
						<template #icon>
							<n-image :src="logo" preview-disabled />
						</template>

						<n-flex :size="0" align="start" class="w-full" vertical>
							<n-text class="text-current">{{ name }}</n-text>

							<template v-if="isNonNullish(description)">
								<n-ellipsis :tooltip="false">
									<n-text :depth="3" class="text-[.8em]">
										{{ description }}
									</n-text>
								</n-ellipsis>
							</template>
						</n-flex>
					</n-button>
				</template>

				<template #extra>
					<n-flex align="center" justify="center" size="small" wrap>
						<n-image :class="[{ 'w-full': isMobile }, { 'h-12': !isMobile }]" :src="logo" />

						<n-flex :align="isMobile ? 'center' : undefined" :size="0" vertical>
							<n-text>{{ name }}</n-text>

							<template v-if="isNonNullish(description)">
								<n-text :depth="3" class="text-[.8em]">
									{{ description }}
								</n-text>
							</template>
						</n-flex>

						<template v-if="status === 'dead'">
							<n-alert class="w-full" type="error">可能已经无法访问</n-alert>
						</template>
					</n-flex>
				</template>
			</custom-redirect-wrapper>
		</template>
	</n-flex>
</template>