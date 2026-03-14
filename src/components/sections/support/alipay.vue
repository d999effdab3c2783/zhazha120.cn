<script lang="ts" setup>
import CustomNaivePosition from '@/components/custom/naive/position.vue'
import { useZodRegistry } from '@/composables/database'
import { NImage } from 'naive-ui'
import { isNonNullish } from 'remeda'
import { z } from 'zod'

defineOptions({
	name: 'SectionsSupportAlipay'
})

const {
	0: red_packet,
	1: qrcode
} = useZodRegistry(
	z.object({
		'support.alipay.red_packet:0': z.string()
			.describe('file'),
		'support.alipay.qrcode:1': z.string()
			.describe('file')
	})
)
</script>

<template>
	<custom-naive-position placement="center">
		<template v-if="isNonNullish(red_packet)">
			<n-image :src="red_packet" class="w-120"/>
		</template>

		<template v-if="isNonNullish(qrcode)">
			<n-image :src="qrcode" class="w-120"/>
		</template>
	</custom-naive-position>
</template>