<template>
	<n-element class="fixed inset-0 bg-black z-120">
		<n-grid :cols="3" class="size-full">
			<n-grid-item class="p-2 size-full">
				<custom-naive-ui-position cover placement="top-left">top-left</custom-naive-ui-position>
			</n-grid-item>

			<n-grid-item class="p-2 bg-white/10 size-full">
				<custom-naive-ui-position cover placement="top-center">top-center</custom-naive-ui-position>
			</n-grid-item>

			<n-grid-item class="p-2 size-full">
				<custom-naive-ui-position cover placement="top-right">top-right</custom-naive-ui-position>
			</n-grid-item>

			<n-grid-item class="p-2 bg-white/10 size-full">
				<custom-naive-ui-position cover placement="center-left">center-left</custom-naive-ui-position>
			</n-grid-item>

			<n-grid-item class="p-2 size-full">
				<custom-naive-ui-position cover placement="center">center</custom-naive-ui-position>
			</n-grid-item>

			<n-grid-item class="p-2 bg-white/10 size-full">
				<custom-naive-ui-position cover placement="center-right">center-right</custom-naive-ui-position>
			</n-grid-item>

			<n-grid-item class="p-2 size-full">
				<custom-naive-ui-position cover placement="bottom-left">bottom-left</custom-naive-ui-position>
			</n-grid-item>

			<n-grid-item class="p-2 bg-white/10 size-full">
				<custom-naive-ui-position cover placement="bottom-center">bottom-center</custom-naive-ui-position>
			</n-grid-item>

			<n-grid-item class="p-2 size-full">
				<custom-naive-ui-position cover placement="bottom-right">bottom-right</custom-naive-ui-position>
			</n-grid-item>
		</n-grid>
	</n-element>
</template>