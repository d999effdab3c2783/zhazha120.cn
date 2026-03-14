<script lang="ts" setup>
import CustomNaiveAutoStack from '@/components/custom/naive/auto-stack.vue'
import CustomNaiveButton from '@/components/custom/naive/button.vue'
import CustomNaiveRouteButton from '@/components/custom/naive/route-button.vue'
import CustomRedirect from '@/components/custom/redirect.vue'
import { useDatabase, useHasRegistry } from '@/composables/database'
import type SelfExternalLink from '@/database/tables/self_external_link'
import { isDesktop } from '@/shared/responsive'
import { NCard, NDivider } from 'naive-ui'
import { isEmptyish } from 'remeda'

defineOptions({
	name: 'SectionsSelfDiscover'
})

const items = useDatabase<SelfExternalLink[]>(async database => {
	return database.self_external_links.toArray()
})

const show_self = useHasRegistry('self.*')
const show_dev = useHasRegistry('dev.*')
const show_support = useHasRegistry('support.*')
const show_game = useHasRegistry('game.*')
const show_birthday = useHasRegistry('birthday.*')
const show_furry = useHasRegistry('furry.*')
</script>

<template>
	<n-card size="small" title="探索我">
		<custom-naive-auto-stack>
			<template v-if="!isEmptyish(items)">
				<template v-for="item in items">
					<custom-redirect :href="item.href">
						<custom-naive-button :icon="item.icon">{{ item.name }}</custom-naive-button>
					</custom-redirect>
				</template>

				<n-divider :vertical="isDesktop"/>
			</template>

			<custom-naive-route-button :to="{ path: '/tools' }" icon="i-ant-design:tool-outlined" type="primary"/>

			<template v-if="show_self">
				<custom-naive-route-button :to="{ path: '/self' }" icon="i-ant-design:user-outlined" type="primary"/>
			</template>

			<template v-if="show_dev">
				<custom-naive-route-button :to="{ path: '/dev' }" icon="i-ant-design:code-outlined" type="primary"/>
			</template>

			<template v-if="show_support">
				<custom-naive-route-button :to="{ path: '/support' }" icon="i-ant-design:heart-outlined" type="primary"/>
			</template>

			<template v-if="show_game">
				<custom-naive-route-button :to="{ path: '/game' }" icon="i-tabler:device-gamepad" type="primary"/>
			</template>

			<template v-if="show_birthday">
				<custom-naive-route-button :to="{ path: '/birthday' }" icon="i-mingcute:birthday-2-line" type="primary"/>
			</template>

			<template v-if="show_furry">
				<custom-naive-route-button :to="{ path: '/furry' }" icon="i-tabler:paw" type="primary"/>
			</template>
		</custom-naive-auto-stack>
	</n-card>
</template>