<script lang="ts" setup>
import CustomNaiveAutoStack from '@/components/custom/naive/auto-stack.vue'
import CustomNaiveRouteButton from '@/components/custom/naive/route-button.vue'
import LayoutsSubPage from '@/components/layouts/sub-page.vue'
import { useHasRegistry } from '@/composables/database'
import { NCard } from 'naive-ui'

const show_maimai = useHasRegistry('game.records.maimai.*')
const show_minecraft = useHasRegistry('game.records.minecraft.*')
const show_osu = useHasRegistry('game.records.osu.*')
const show_malody = useHasRegistry('game.records.malody.*')
const show_geometry_dash = useHasRegistry('game.records.geometry_dash.*')
const show_tetrio = useHasRegistry('game.records.tetrio.*')
</script>

<template>
	<layouts-sub-page>
		<template v-if="show_maimai || show_minecraft || show_osu || show_malody || show_geometry_dash || show_tetrio">
			<n-card size="small" title="记录">
				<custom-naive-auto-stack>
					<template v-if="show_maimai">
						<custom-naive-route-button :to="{ path: '/game/records/maimai' }" icon="i-custom:maimai"/>
					</template>

					<template v-if="show_minecraft">
						<custom-naive-route-button :to="{ path: '/game/records/minecraft' }" icon="i-arcticons:minecraft"/>
					</template>

					<template v-if="show_osu">
						<custom-naive-route-button :to="{ path: '/game/records/osu' }" icon="i-arcticons:osu"/>
					</template>

					<template v-if="show_malody">
						<custom-naive-route-button :to="{ path: '/game/records/malody' }" icon="i-arcticons:malody-v"/>
					</template>

					<template v-if="show_geometry_dash">
						<custom-naive-route-button :to="{ path: '/game/records/geometry_dash' }" icon="i-arcticons:geometry-dash"/>
					</template>

					<template v-if="show_tetrio">
						<custom-naive-route-button :to="{ path: '/game/records/tetrio' }" icon="i-custom:tetrio"/>
					</template>
				</custom-naive-auto-stack>
			</n-card>
		</template>
	</layouts-sub-page>
</template>