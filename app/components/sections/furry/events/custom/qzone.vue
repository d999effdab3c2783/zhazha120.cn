<script setup lang="ts">
	import { computed } from 'vue'

	const props = defineProps<{
		readonly qq: number
		readonly id: string
	}>()

	const url = computed(() => {
		return `https://h5.qzone.qq.com/ugc/share?appid=311&res_uin=${props.qq}&cellid=${props.id}`
	})
</script>

<template>
	<n-card
		size="small"
		title="了解更多"
	>
		<n-element class="utils__center--grid">
			<n-flex
				align="center"
				size="small"
				vertical
			>
				<n-qr-code
					class="box-content"
					:size="120"
					:value="url"
				/>

				<n-element class="mt-2">
					<custom-redirect
						#="{ aProps, redirect }"
						:href="url"
					>
						<n-button
							tag="a"
							text
							type="primary"
							v-bind="aProps"
							@click.prevent="redirect"
						>
							QQ 空间动态
						</n-button>
					</custom-redirect>
				</n-element>

				<n-text :depth="3">[仅好友可见]</n-text>
			</n-flex>
		</n-element>
	</n-card>
</template>

<style scoped lang="scss">
	@use '~/styles/utils';
</style>