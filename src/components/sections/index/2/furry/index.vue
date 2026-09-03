<template>
	<n-element class="min-h-screen relative">
		<n-element class="pt-30 px-2 container mx-auto">
			<custom-naive-ui-vertical-stack>
				<n-divider dashed>
					<n-text class="text-[1.8em] fw-extrabold">福瑞 (Furry)</n-text>
				</n-divider>

				<sections-index-2-furry-description />

				<n-divider>活动</n-divider>

				<sections-index-2-furry-event />

				<n-divider>设定集</n-divider>

				<sections-index-2-furry-characters />
			</custom-naive-ui-vertical-stack>
		</n-element>
	</n-element>
</template>