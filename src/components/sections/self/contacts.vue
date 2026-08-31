<script lang="ts" setup>
	import { isNonNullish } from 'remeda';

	import contactsData from '@/data/self/contacts' with { type: 'macro' };

	const { isMobile } = useResponsive();
</script>

<template>
	<custom-naive-ui-auto-stack>
		<template v-for="{ icon, name, href, comment } in contactsData">
			<custom-naive-ui-redirect-button :block="isMobile" :href="href" :icon-class="icon" tag="a">
				{{ name }}

				<template v-if="isNonNullish(comment)" #extra>
					<n-element class="text-center whitespace-pre">
						<n-text type="info">{{ comment }}</n-text>
					</n-element>
				</template>
			</custom-naive-ui-redirect-button>
		</template>
	</custom-naive-ui-auto-stack>
</template>