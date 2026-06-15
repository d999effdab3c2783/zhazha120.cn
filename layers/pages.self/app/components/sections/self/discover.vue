<script setup lang="ts">
	import { isNonNullish } from "remeda";

	const appConfig = useAppConfig();
	const { isMobile } = useResponsive();
</script>

<template>
	<n-flex size="small" align="center">
		<template v-for="{ icon, name, href, primary, extra } in appConfig.self.external_links">
			<NaiveRedirectorWrapper :href="href">
				<template #default="{ href, redirect }">
					<n-button
						:block="isMobile"
						:href="href"
						:type="primary ? 'primary' : undefined"
						tag="a"
						@click.prevent="redirect"
					>
						<template #icon>
							<n-icon :class="icon" />
						</template>

						{{ name }}
					</n-button>
				</template>

				<template #extra v-if="isNonNullish(extra)">
					<n-element class="text-center">
						<n-text type="info">{{ extra }}</n-text>
					</n-element>
				</template>
			</NaiveRedirectorWrapper>
		</template>
	</n-flex>
</template>