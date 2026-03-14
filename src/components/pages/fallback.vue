<script lang="ts" setup>
import CustomNaiveButton from '@/components/custom/naive/button.vue'
import CustomNaivePosition from '@/components/custom/naive/position.vue'
import CustomNaiveRouteButton from '@/components/custom/naive/route-button.vue'
import CustomNaiveVerticalStack from '@/components/custom/naive/vertical-stack.vue'
import CustomVueBitsFuzzyText from '@/components/custom/vue-bits/fuzzy-text.vue'
import { useRouterNavigation } from '@/composables/router'
import { isMobile } from '@/shared/responsive'
import { NText } from 'naive-ui'
import { isNonNullish } from 'remeda'
import { useRoute } from 'vue-router'

const route = useRoute()
const routerNavigation = useRouterNavigation()
const firstPath = route.fullPath.split('/')[1]
</script>

<template>
	<custom-naive-position class="h-screen" placement="center">
		<custom-naive-vertical-stack :size="30" align="center">
			<custom-vue-bits-fuzzy-text :font-size="isMobile ? 60 : 120">无内容</custom-vue-bits-fuzzy-text>

			<template v-if="isNonNullish(firstPath) && isNonNullish($router.resolve({ path: `/${firstPath}` }).name)">
				<custom-naive-vertical-stack align="center">
					<n-text class="text-6">猜你想找</n-text>
					<custom-naive-route-button :to="(`/${firstPath}`)" type="primary"/>
				</custom-naive-vertical-stack>
			</template>

			<custom-naive-button icon="i-tabler:arrow-back" @click="routerNavigation.back">返回</custom-naive-button>
		</custom-naive-vertical-stack>
	</custom-naive-position>
</template>