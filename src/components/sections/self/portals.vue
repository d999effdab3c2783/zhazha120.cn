<script lang="ts" setup>
	import { isNonNullish } from 'remeda'

	import portalsData from '@/data/self/portals' with { type: 'macro' }

	const { isMobile } = useResponsive()
</script>

<template>
	<custom-naive-ui-auto-stack>
		<template v-for="{ type, icon, name, href, comment } in portalsData">
			<custom-naive-ui-redirect-button :block="isMobile" :href="href" :icon-class="icon" :type="type" tag="a">
				<custom-naive-ui-text-stack>
					<n-text class="text-current fw-bold">
						{{ name }}
					</n-text>
				</custom-naive-ui-text-stack>

				<template v-if="isNonNullish(comment)" #extra>
					<n-element class="text-center whitespace-pre">
						<n-text type="info">{{ comment }}</n-text>
					</n-element>
				</template>
			</custom-naive-ui-redirect-button>
		</template>
	</custom-naive-ui-auto-stack>
</template>