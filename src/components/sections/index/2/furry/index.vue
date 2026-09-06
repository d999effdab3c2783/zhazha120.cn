<script lang="ts" setup></script>
<template>
	<n-element class="min-h-screen relative">
		<n-element class="pt-30 px-2 container mx-auto">
			<custom-naive-ui-vertical-stack>
				<n-divider dashed>
					<custom-naive-ui-text-stack class="leading-tight">
						<custom-naive-ui-vertical-stack :size="0" align="center">
							<n-text class="text-([1.8em] nowrap) fw-extrabold">福瑞</n-text>
							<n-text :depth="3" class="fw-extrabold">Furry</n-text>
						</custom-naive-ui-vertical-stack>
					</custom-naive-ui-text-stack>
				</n-divider>

				<sections-index-2-furry-description />

				<n-divider>活动</n-divider>

				<sections-index-2-furry-event />

				<n-divider>设定</n-divider>

				<sections-index-2-furry-characters />
			</custom-naive-ui-vertical-stack>
		</n-element>
	</n-element>
</template>