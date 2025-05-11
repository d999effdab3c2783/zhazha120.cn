<script lang="ts" setup>
import minecraft from '~/data/minecraft'
import { isMobile } from '~/shared/responsive'
</script>

<template>
	<n-card size="small" title="我的世界 (Minecraft)">
		<n-flex :align="isMobile ? 'center' : undefined" :vertical="isMobile" size="small">
			<n-image :img-props="{ class: 'h-40' }" :src="minecraft.skin" class="scale-120"/>
			<span class="text-3xl fw-bold">{{ minecraft.name }}</span>
		</n-flex>

		<template #action>
			<n-flex :vertical="isMobile" justify="center" size="small">
				<template v-for="button in minecraft.buttons">
					<custom-button v-bind="button"/>
				</template>
			</n-flex>
		</template>
	</n-card>
</template>