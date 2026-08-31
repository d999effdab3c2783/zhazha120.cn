<script lang="ts">
	export type Props = {
		readonly iconClass?: string;
	};
</script>

<script lang="ts" setup>
	import { isNonNullish } from 'remeda';

	defineOptions({
		inheritAttrs: false,
	});

	defineProps<Props>();
</script>

<template>
	<n-button v-bind="$attrs">
		<template #icon>
			<template v-if="isNonNullish(iconClass)">
				<n-icon :class="iconClass" />
			</template>

			<template v-else>
				<slot name="icon" />
			</template>
		</template>

		<slot />
	</n-button>
</template>