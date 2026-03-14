<script lang="ts" setup>
import CustomNaivePosition from '@/components/custom/naive/position.vue'
import CustomNaiveVerticalStack from '@/components/custom/naive/vertical-stack.vue'
import { useZodRegistry } from '@/composables/database'
import { isMobile } from '@/shared/responsive'
import { NAvatar, NCard, NText, useMessage } from 'naive-ui'
import { isEmptyish, isNonNullish, isNullish } from 'remeda'
import z from 'zod'

defineOptions({
	name: 'SectionsAboutIntro'
})

const {
	0: avatar,
	1: name,
	2: short_name,
	3: poke
} = useZodRegistry(
	z.object({
		'intro.avatar:0': z.string()
			.describe('file'),
		'intro.name:1': z.string(),
		'self.short_name:2': z.string(),
		'intro.poke:3': z.string()
	})
)

const message = useMessage()

const handlePoke = async () => {
	if ( isNullish(poke.value) ) {
		return
	}

	message.create(poke.value)
}
</script>

<template>
	<n-card size="small">
		<custom-naive-position :placement="(isMobile ? 'center' : 'center-left')">
			<template v-if="isNonNullish(avatar)">
				<n-avatar :src="avatar" class="size-20 transition-(transform duration-500 ease-in-out) hover:rotate-360" round @dblclick="handlePoke"/>
			</template>

			<custom-naive-vertical-stack :size="0" class="leading-tight">
				<template v-if="!isEmptyish(name)">
					<n-text class="text-8 fw-extrabold">{{ name }}</n-text>
				</template>

				<template v-if="!isEmptyish(short_name)">
					<n-text :depth="3">简称 {{ short_name }}</n-text>
				</template>
			</custom-naive-vertical-stack>
		</custom-naive-position>
	</n-card>
</template>