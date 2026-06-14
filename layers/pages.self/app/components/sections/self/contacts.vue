<script setup lang="ts">
	import { isNonNullish } from "remeda";

	const appConfig = useAppConfig();
	const { isMobile } = useResponsive();
</script>

<template>
	<n-flex size="small" align="center">
		<template v-for="{ icon, name, href, extra } in appConfig.self.contacts">
			<NaiveRedirectorWrapper :href="href">
				<template #default="{ href, redirect }">
					<n-button tag="a" :href="href" @click.prevent="redirect" :block="isMobile">
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