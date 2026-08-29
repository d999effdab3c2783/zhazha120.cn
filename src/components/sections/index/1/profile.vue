<script lang="ts" setup>
	import type { MotionVariants } from '@vueuse/motion';

	import profileData from '@/data/self/profile' with { type: 'macro' };

	const { isMobile } = useResponsive();
	const message = useMessage();

	const motions = {
		avatar: {
			initial: {
				scale: 0,
				rotate: 0,
			},
			visible: {
				scale: 1,
				rotate: 0,

				transition: {
					type: 'spring',
					duration: 500,

					delay: 300,
				},
			},
			hovered: {
				rotate: [0, 360],

				transition: {
					type: 'spring',
					duration: 1000,
				},
			},
		} satisfies MotionVariants<string>,

		name: {
			initial: {
				opacity: 0,
			},
			visible: {
				opacity: 1,

				transition: {
					type: 'tween',
					duration: 500,

					delay: 600,
				},
			},
		} satisfies MotionVariants<string>,
	} as const;

	const handleAvatarDoubleClick = () => {
		message.create(profileData.avatar.poke);
	};
</script>

<template>
	<n-element class="absolute top-1/2 left-1/2 -translate-1/2">
		<n-flex :vertical="isMobile" align="center" justify="center" size="small" wrap>
			<n-avatar
				v-motion="motions.avatar"
				:src="profileData.avatar.src"
				circle
				class="size-30"
				@dblclick="handleAvatarDoubleClick"
			/>

			<n-text
				v-motion="motions.name"
				class="font-[v-zhazha120-script] cursor-default text-(15 nowrap) transition-(text-shadow ease-in-out duration-500) fw-extrabold text-shadow-[0_0_0] hover:text-shadow-[0_0_.2em]"
			>
				{{ profileData.name }}
			</n-text>
		</n-flex>
	</n-element>
</template>