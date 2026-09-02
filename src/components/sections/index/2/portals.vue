<template>
	<n-element class="pt-30 px-2 container mx-auto">
		<n-card size="small" title="快速导航">
			<custom-naive-ui-horizontal-stack>
				<custom-naive-ui-redirect-button href="/self" tag="a">本体</custom-naive-ui-redirect-button>
				<custom-naive-ui-redirect-button href="/dev" tag="a">开发</custom-naive-ui-redirect-button>
				<custom-naive-ui-redirect-button href="/furry" tag="a">福瑞</custom-naive-ui-redirect-button>
				<custom-naive-ui-redirect-button href="/misc" tag="a">杂项</custom-naive-ui-redirect-button>
			</custom-naive-ui-horizontal-stack>
		</n-card>
	</n-element>
</template>