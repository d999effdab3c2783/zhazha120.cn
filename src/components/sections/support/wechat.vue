<script lang="ts" setup>
import CustomNaivePosition from '@/components/custom/naive/position.vue'
import { useZodRegistry } from '@/composables/database'
import { NImage } from 'naive-ui'
import { isNonNullish } from 'remeda'
import { z } from 'zod'

defineOptions({
	name: 'SectionsSupportWechat'
})

const {
	0: qrcode
} = useZodRegistry(
	z.object({
		'support.wechat.qrcode:0': z.string()
			.describe('file')
	})
)
</script>

<template>
	<template v-if="isNonNullish(qrcode)">
		<custom-naive-position placement="center">
			<n-image :src="qrcode" class="w-120"/>
		</custom-naive-position>
	</template>
</template>