<script lang="ts" setup>
import LayoutsSubPage from '@/components/layouts/sub-page.vue'
import SectionsSupportAfdian from '@/components/sections/support/afdian.vue'
import SectionsSupportAlipay from '@/components/sections/support/alipay.vue'
import SectionsSupportQq from '@/components/sections/support/qq.vue'
import SectionsSupportWechat from '@/components/sections/support/wechat.vue'
import { useHasRegistry } from '@/composables/database'
import { useRouteParams } from '@vueuse/router'
import { NTabPane, NTabs } from 'naive-ui'

const method = useRouteParams('method', () => undefined)

const show_afdian = useHasRegistry('support.afdian.*')
const show_qq = useHasRegistry('support.qq.*')
const show_wechat = useHasRegistry('support.wechat.*')
const show_alipay = useHasRegistry('support.alipay.*')
</script>

<template>
	<layouts-sub-page>
		<template v-if="show_afdian || show_qq || show_wechat || show_alipay">
			<n-tabs v-model:value="method" default-value="alipay" type="segment">
				<template v-if="show_afdian">
					<n-tab-pane name="afdian" tab="爱发电">
						<sections-support-afdian/>
					</n-tab-pane>
				</template>

				<template v-if="show_qq">
					<n-tab-pane name="qq" tab="QQ">
						<sections-support-qq/>
					</n-tab-pane>
				</template>

				<template v-if="show_wechat">
					<n-tab-pane name="wechat" tab="微信">
						<sections-support-wechat/>
					</n-tab-pane>
				</template>

				<template v-if="show_alipay">
					<n-tab-pane name="alipay" tab="支付宝">
						<sections-support-alipay/>
					</n-tab-pane>
				</template>
			</n-tabs>
		</template>
	</layouts-sub-page>
</template>