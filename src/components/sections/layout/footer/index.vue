<script lang="ts" setup>
	import { abbreviatedSha, sha } from '~build/git'

	import footerData from '@/data/website/footer' // with { type: 'macro' }

	const { isMobile } = useResponsive()
	const now = useNow()

	const currentYear = computed(() => {
		return now.value.getFullYear()
	})
</script>

<template>
	<n-grid
		:class="{
			'!gap-2': isMobile
		}"
		:cols="isMobile ? 1 : 5"
	>
		<n-grid-item>
			<custom-naive-ui-position cover placement="center">
				<sections-layout-footer-theme-switcher />
			</custom-naive-ui-position>
		</n-grid-item>

		<n-grid-item>
			<custom-naive-ui-position cover placement="center">
				<custom-naive-ui-text-stack>
					<n-text :depth="3" class="text-[.9em]">
						&copy; {{ footerData.copyright_start_year }} - {{ currentYear }}
					</n-text>
				</custom-naive-ui-text-stack>
			</custom-naive-ui-position>
		</n-grid-item>

		<n-grid-item>
			<custom-naive-ui-position cover placement="center">
				<custom-naive-ui-vertical-stack>
					<custom-naive-ui-redirect-button
						:href="footerData.filing.icp.href"
						class="size-full"
						tag="a"
						text
						type="primary"
					>
						<custom-naive-ui-text-stack>
							<n-text class="text-current fw-bold">
								{{ footerData.filing.province_abbr }} ICP 备 {{ footerData.filing.icp.code }} 号
							</n-text>
						</custom-naive-ui-text-stack>
					</custom-naive-ui-redirect-button>

					<custom-naive-ui-redirect-button
						:href="
							footerData.filing.safety.href.replaceAll('{code}', footerData.filing.safety.code.toString())
						"
						:style="{
							'--n-icon-margin': '0 .2em 0 0'
						}"
						class="size-full"
						tag="a"
						text
						type="primary"
					>
						<template #icon>
							<n-image :src="footerData.filing.safety.icon" @click.prevent.stop />
						</template>

						<custom-naive-ui-text-stack>
							<n-text class="text-current fw-bold">
								{{ footerData.filing.province_abbr }}公网安备 {{ footerData.filing.safety.code }} 号
							</n-text>
						</custom-naive-ui-text-stack>
					</custom-naive-ui-redirect-button>
				</custom-naive-ui-vertical-stack>
			</custom-naive-ui-position>
		</n-grid-item>

		<n-grid-item>
			<custom-naive-ui-position cover placement="center">
				<custom-naive-ui-redirect-button
					:href="footerData.version.href.replaceAll('{sha}', sha)"
					:style="{
						'--n-icon-margin': '0 .1em 0 0'
					}"
					class="size-full"
					icon-class="i-akar-icons:history"
					tag="a"
					text
				>
					<custom-naive-ui-text-stack>
						<n-text class="text-current fw-bold">
							{{ abbreviatedSha }}
						</n-text>
					</custom-naive-ui-text-stack>
				</custom-naive-ui-redirect-button>
			</custom-naive-ui-position>
		</n-grid-item>

		<n-grid-item>
			<custom-naive-ui-position cover placement="center">
				<sections-layout-footer-utilities />
			</custom-naive-ui-position>
		</n-grid-item>
	</n-grid>
</template>