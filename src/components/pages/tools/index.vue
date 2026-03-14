<script lang="ts" setup>
import CustomNaiveAutoStack from '@/components/custom/naive/auto-stack.vue'
import CustomNaiveRouteButton from '@/components/custom/naive/route-button.vue'
import LayoutsSubPage from '@/components/layouts/sub-page.vue'
import { NCard } from 'naive-ui'
</script>

<template>
	<layouts-sub-page>
		<n-card size="small">
			<custom-naive-auto-stack>
				<custom-naive-route-button :to="{ path: '/tools/key-accuracy-calculator' }" icon="i-ant-design:calculator-outlined" type="primary"/>
				<custom-naive-route-button :to="{ path: '/tools/image-watermark' }" icon="i-tdesign:image-edit" type="primary"/>
			</custom-naive-auto-stack>
		</n-card>
	</layouts-sub-page>
</template>