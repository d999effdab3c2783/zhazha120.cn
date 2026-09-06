<template>
	<n-element class="pb-30">
		<n-card size="small" title="快速导航">
			<custom-naive-ui-horizontal-stack>
				<custom-naive-ui-redirect-button href="/furry/events" tag="a">
					<custom-naive-ui-text-stack>
						<n-text class="text-current fw-bold">活动</n-text>
					</custom-naive-ui-text-stack>
				</custom-naive-ui-redirect-button>

				<custom-naive-ui-redirect-button href="/furry/characters" tag="a">
					<custom-naive-ui-text-stack>
						<n-text class="text-current fw-bold">设定</n-text>
					</custom-naive-ui-text-stack>
				</custom-naive-ui-redirect-button>
			</custom-naive-ui-horizontal-stack>
		</n-card>
	</n-element>
</template>