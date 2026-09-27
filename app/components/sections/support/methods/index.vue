<script setup lang="ts">
	import { isEqual } from 'es-toolkit'

	import type { ExternalSupportMethod, ImageSupportMethod, QRCodeSupportMethod, SupportMethod } from '~/types/support'

	defineProps<{
		readonly item: SupportMethod
	}>()
</script>

<template>
	<n-element>
		<template v-if="isEqual(item.type, 'external')">
			<sections-support-methods-external :item="item as ExternalSupportMethod" />
		</template>

		<template v-if="isEqual(item.type, 'image')">
			<sections-support-methods-image :item="item as ImageSupportMethod" />
		</template>

		<template v-if="isEqual(item.type, 'qrcode')">
			<sections-support-methods-qrcode :item="item as QRCodeSupportMethod" />
		</template>
	</n-element>
</template>