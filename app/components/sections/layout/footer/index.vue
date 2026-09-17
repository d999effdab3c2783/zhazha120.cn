<script lang="ts" setup>
	import { useNow } from '@vueuse/core'
	import { computed } from 'vue'

	import { useResponsive } from '~/composables/responsive'
	import websiteFooterData from '~/data/website/footer'

	const { isMobile } = useResponsive()
	const now = useNow()

	const currentYear = computed(() => {
		return now.value.getFullYear()
	})
</script>

<template>
	<n-grid
		:cols="isMobile ? 1 : 3"
		:y-gap="10"
	>
		<n-grid-item class="place-self-center">
			<n-text>&copy; {{ websiteFooterData.copyright_start_year }} - {{ currentYear }}</n-text>
		</n-grid-item>

		<n-grid-item class="place-self-center">
			<n-flex
				:size="0"
				vertical
			>
				<custom-naive-ui-redirect
					#="{ aProps, redirect }"
					:href="websiteFooterData.filing.icp.href"
				>
					<n-button
						class="fw-bold"
						tag="a"
						text
						type="primary"
						v-bind="aProps"
						@click.prevent="redirect"
					>
						{{ websiteFooterData.filing.province_abbr }} ICP 备 {{ websiteFooterData.filing.icp.code }} 号
					</n-button>
				</custom-naive-ui-redirect>

				<custom-naive-ui-redirect
					#="{ aProps, redirect }"
					:href="
						websiteFooterData.filing.safety.href.replaceAll(
							'{code}',
							websiteFooterData.filing.safety.code.toString()
						)
					"
				>
					<n-button
						:style="{
							'--n-icon-margin': '0 .2em 0 0'
						}"
						class="fw-bold"
						tag="a"
						text
						type="primary"
						v-bind="aProps"
						@click.prevent="redirect"
					>
						<template #icon>
							<n-image :src="websiteFooterData.filing.safety.icon.src.href" />
						</template>

						{{ websiteFooterData.filing.province_abbr }}公网安备
						{{ websiteFooterData.filing.safety.code }} 号
					</n-button>
				</custom-naive-ui-redirect>
			</n-flex>
		</n-grid-item>

		<n-grid-item class="place-self-center">
			<sections-layout-footer-theme-switcher />
		</n-grid-item>
	</n-grid>
</template>