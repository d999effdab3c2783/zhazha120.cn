<script lang="ts">
	import type { Props as ButtonProps } from '@/components/custom/naive-ui/button.vue';
	import type { Props as RedirectWrapperProps } from '@/components/custom/naive-ui/redirect-wrapper.vue';

	export type Props = ButtonProps & RedirectWrapperProps;
</script>

<script lang="ts" setup>
	defineOptions({
		inheritAttrs: false,
	});

	defineProps<Props>();
</script>

<template>
	<custom-naive-ui-redirect-wrapper v-bind="$props">
		<template #default="{ redirect, aProps }">
			<custom-naive-ui-button v-bind="{ ...$attrs, ...$props, ...aProps }" @click.prevent.stop="redirect">
				<template #icon>
					<slot name="icon" />
				</template>

				<slot />
			</custom-naive-ui-button>
		</template>

		<template #extra>
			<slot name="extra" />
		</template>
	</custom-naive-ui-redirect-wrapper>
</template>