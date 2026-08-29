<script lang="ts" setup>
	import { isNonNullish } from 'remeda';

	import CustomButton from '@/components/custom/naive-ui/button.vue';
	import CustomRedirectWrapper from '@/components/custom/redirect-wrapper.vue';
	import portalsData from '@/data/portals' with { type: 'macro' };

	const { isMobile } = useResponsive();
</script>

<template>
	<n-flex size="small" wrap>
		<template v-for="{ type, icon, name, href, comment } in portalsData">
			<custom-redirect-wrapper :href="href">
				<template #default="{ redirect, aProps }">
					<custom-button
						:block="isMobile"
						:icon-class="icon"
						:type="type"
						tag="a"
						v-bind="aProps"
						@click.prevent="redirect"
					>
						{{ name }}
					</custom-button>
				</template>

				<template v-if="isNonNullish(comment)" #extra>
					<n-element class="text-center whitespace-pre">
						<n-text type="info">{{ comment }}</n-text>
					</n-element>
				</template>
			</custom-redirect-wrapper>
		</template>
	</n-flex>
</template>