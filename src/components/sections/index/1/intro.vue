<script lang="ts" setup>
	import profileData from '@/data/profile';

	const message = useMessage();

	const handleAvatarDoubleClick = () => {
		message.create(profileData.avatar.poke);
	};
</script>

<template>
	<n-element class="absolute top-1/2 left-1/2 -translate-1/2">
		<n-flex align="center" justify="center" size="small">
			<n-image
				:src="profileData.avatar.src"
				class="size-30 transition-(transform ease-in-out duration-500) hover:rotate-360"
				preview-disabled
				@dblclick="handleAvatarDoubleClick"
			/>

			<n-text
				class="font-[v-zhazha120-script] cursor-default text-(15 nowrap) transition-(text-shadow ease-in-out duration-500) fw-extrabold text-shadow-[0_0_0] hover:text-shadow-[0_0_.2em]"
			>
				{{ profileData.name }}
			</n-text>
		</n-flex>
	</n-element>
</template>