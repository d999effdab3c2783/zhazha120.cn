<script lang="ts" setup>
	import type { SupportChannel } from '@/data/support';

	defineProps<SupportChannel>();
</script>

<template>
	<n-flex size="small" vertical>
		<template v-for="method in methods">
			<template v-if="method.type === 'external'">
				<sections-support-methods-external v-bind="method" />
			</template>

			<template v-else-if="method.type === 'image'">
				<sections-support-methods-image v-bind="method" />
			</template>

			<template v-else-if="method.type === 'qrcode'">
				<sections-support-methods-qrcode v-bind="method" />
			</template>
		</template>
	</n-flex>
</template>