<script lang="ts" setup>
	import { isNonNullish } from 'remeda';

	defineOptions({
		inheritAttrs: false,
	});

	defineProps<{
		readonly iconClass?: string;
	}>();
</script>

<template>
	<n-button v-bind="$attrs">
		<template #icon>
			<template v-if="isNonNullish(iconClass)">
				<n-icon :class="iconClass" />
			</template>

			<template v-else>
				<Component :is="$slots.icon" />
			</template>
		</template>

		<slot />
	</n-button>
</template>