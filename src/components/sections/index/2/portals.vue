<script lang="ts" setup>
	const { isMobile } = useResponsive()
</script>

<template>
	<n-element class="pt-30 px-2 container mx-auto">
		<n-card size="small" title="快速导航">
			<custom-naive-ui-horizontal-stack>
				<custom-naive-ui-redirect-button
					:block="isMobile"
					href="/self"
					icon-class="i-game-icons:inner-self"
					tag="a"
				>
					<custom-naive-ui-text-stack>
						<n-text class="text-current fw-bold">本体</n-text>
					</custom-naive-ui-text-stack>
				</custom-naive-ui-redirect-button>

				<custom-naive-ui-redirect-button :block="isMobile" href="/dev" icon-class="i-at-icons:code" tag="a">
					<custom-naive-ui-text-stack>
						<n-text class="text-current fw-bold">开发</n-text>
					</custom-naive-ui-text-stack>
				</custom-naive-ui-redirect-button>

				<custom-naive-ui-redirect-button
					:block="isMobile"
					href="/furry"
					icon-class="i-fluent-color:paw-24"
					tag="a"
				>
					<custom-naive-ui-text-stack>
						<n-text class="text-current fw-bold">福瑞</n-text>
					</custom-naive-ui-text-stack>
				</custom-naive-ui-redirect-button>

				<custom-naive-ui-redirect-button
					:block="isMobile"
					href="/misc"
					icon-class="i-boxicons:apps-alt"
					tag="a"
				>
					<custom-naive-ui-text-stack>
						<n-text class="text-current fw-bold">杂项</n-text>
					</custom-naive-ui-text-stack>
				</custom-naive-ui-redirect-button>
			</custom-naive-ui-horizontal-stack>
		</n-card>
	</n-element>
</template>