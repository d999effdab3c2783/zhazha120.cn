<script lang="ts" setup>

const show = ref(false)
</script>

<template>
	<slot :toggle="() => show = !show" name="trigger"/>

	<n-modal v-model:show="show" class="w-4/5 md:w-1/2" v-bind="$attrs">
		<n-scrollbar x-scrollable>
			<slot/>
		</n-scrollbar>
	</n-modal>
</template>