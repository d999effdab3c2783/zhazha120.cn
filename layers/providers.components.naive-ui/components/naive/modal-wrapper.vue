<script lang="ts" setup>
	defineOptions({
		inheritAttrs: false,
	});

	const { isMobile } = useResponsive();

	const show = shallowRef(false);

	const handleHide = () => {
		show.value = false;
	};

	const handleShow = () => {
		show.value = true;
	};

	const handleToggle = () => {
		show.value = !show.value;
	};

	defineExpose({
		state: show,
		hide: handleHide,
		show: handleShow,
		toggle: handleToggle,
	});
</script>

<template>
	<n-modal v-model:show="show" :class="{ 'w-1/2 mx-auto': !isMobile }" class="m-2" v-bind="$attrs">
		<slot />
	</n-modal>

	<slot :hide="handleHide" :show="handleShow" :state="show" :toggle="handleToggle" name="trigger" />
</template>