<template>
	<n-element class="pt-30 px-2 container mx-auto">
		<n-card size="small" title="快速导航">
			<custom-naive-ui-horizontal-stack>
				<custom-naive-ui-redirect-button href="/self" tag="a">
					<custom-naive-ui-text-stack>
						<n-text class="text-current fw-bold">本体</n-text>
					</custom-naive-ui-text-stack>
				</custom-naive-ui-redirect-button>

				<custom-naive-ui-redirect-button href="/dev" tag="a">
					<custom-naive-ui-text-stack>
						<n-text class="text-current fw-bold">开发</n-text>
					</custom-naive-ui-text-stack>
				</custom-naive-ui-redirect-button>

				<custom-naive-ui-redirect-button href="/furry" tag="a">
					<custom-naive-ui-text-stack>
						<n-text class="text-current fw-bold">福瑞</n-text>
					</custom-naive-ui-text-stack>
				</custom-naive-ui-redirect-button>

				<custom-naive-ui-redirect-button href="/misc" tag="a">
					<custom-naive-ui-text-stack>
						<n-text class="text-current fw-bold">杂项</n-text>
					</custom-naive-ui-text-stack>
				</custom-naive-ui-redirect-button>
			</custom-naive-ui-horizontal-stack>
		</n-card>
	</n-element>
</template>