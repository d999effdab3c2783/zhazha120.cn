<script lang="ts" setup>
	import contactsData from '@/data/contacts' with { type: 'macro' };
	import CustomButton from '@/components/custom/naive-ui/button.vue';
	import CustomRedirectWrapper from '@/components/custom/redirect-wrapper.vue';
	import { isNonNullish } from 'remeda';

	const { isMobile } = useResponsive();
</script>

<template>
	<n-card size="small" title="找到我">
		<n-flex size="small" wrap>
			<template v-for="{ icon, name, href, comment } in contactsData">
				<custom-redirect-wrapper :href="href">
					<template #default="{ redirect, aProps }">
						<custom-button
							:block="isMobile"
							:icon-class="icon"
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
	</n-card>
</template>