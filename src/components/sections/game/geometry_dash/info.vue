<script lang="ts" setup>
import CustomNaivePosition from '@/components/custom/naive/position.vue'
import { useZodRegistry } from '@/composables/database'
import { isMobile } from '@/shared/responsive'
import { NCard, NImage } from 'naive-ui'
import { isNonNullish } from 'remeda'
import z from 'zod'

defineOptions({
	name: 'SectionsGameGeometryDashInfo'
})

const {
	0: username,
	1: cube,
	2: ship,
	3: ball,
	4: ufo,
	5: wave,
	6: robot,
	7: spider,
	8: swing,
	9: jetpack
} = useZodRegistry(
	z.object({
		'game.records.geometry_dash.username:0': z.string(),
		'game.records.geometry_dash.cube:1': z.string()
			.describe('file'),
		'game.records.geometry_dash.ship:2': z.string()
			.describe('file'),
		'game.records.geometry_dash.ball:3': z.string()
			.describe('file'),
		'game.records.geometry_dash.ufo:4': z.string()
			.describe('file'),
		'game.records.geometry_dash.wave:5': z.string()
			.describe('file'),
		'game.records.geometry_dash.robot:6': z.string()
			.describe('file'),
		'game.records.geometry_dash.spider:7': z.string()
			.describe('file'),
		'game.records.geometry_dash.swing:8': z.string()
			.describe('file'),
		'game.records.geometry_dash.jetpack:9': z.string()
			.describe('file')
	})
)
</script>

<template>
	<template v-if="isNonNullish(username)">
		<n-card :title="username" size="small">
			<custom-naive-position :placement="(isMobile ? 'center' : 'center-left')">
				<template v-if="isNonNullish(cube)">
					<n-image :src="cube" class="h-12"/>
				</template>

				<template v-if="isNonNullish(ship)">
					<n-image :src="ship" class="h-12"/>
				</template>

				<template v-if="isNonNullish(ball)">
					<n-image :src="ball" class="h-12"/>
				</template>

				<template v-if="isNonNullish(ufo)">
					<n-image :src="ufo" class="h-12"/>
				</template>

				<template v-if="isNonNullish(wave)">
					<n-image :src="wave" class="h-12"/>
				</template>

				<template v-if="isNonNullish(robot)">
					<n-image :src="robot" class="h-12"/>
				</template>

				<template v-if="isNonNullish(spider)">
					<n-image :src="spider" class="h-12"/>
				</template>

				<template v-if="isNonNullish(swing)">
					<n-image :src="swing" class="h-12"/>
				</template>

				<template v-if="isNonNullish(jetpack)">
					<n-image :src="jetpack" class="h-12"/>
				</template>
			</custom-naive-position>
		</n-card>
	</template>
</template>