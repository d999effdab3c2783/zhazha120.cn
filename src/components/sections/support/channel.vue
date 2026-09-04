<script lang="ts" setup>
	import type { SupportChannel } from '@/data/support'

	defineProps<SupportChannel>()
</script>

<template>
	<custom-naive-ui-vertical-stack>
		<template v-for="method in methods">
			<template v-if="method.type === 'external'">
				<sections-support-methods-external v-bind="method" />
			</template>

			<template v-if="method.type === 'image'">
				<sections-support-methods-image v-bind="method" />
			</template>

			<template v-if="method.type === 'qrcode'">
				<sections-support-methods-qrcode v-bind="method" />
			</template>
		</template>
	</custom-naive-ui-vertical-stack>
</template>