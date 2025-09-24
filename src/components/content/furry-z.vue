<script lang="ts" setup>
import license_32c9a19123e26cc595ffbdcaf07a9cbd42a760ce from '~/assets/license_32c9a19123e26cc595ffbdcaf07a9cbd42a760ce.webp'
</script>

<template>
	<n-flex vertical>
		<n-card size="small" title="毛">
			<n-flex vertical>
				<iframe class="w-full border-none aspect-ratio-video" src="https://player.bilibili.com/player.html?aid=115178574184785&autoplay=0"/>

				<div class="fw-bold">
					<n-flex :size="0" align="center">
						<n-text type="warning">制作者: 栗糖</n-text>
						<n-divider vertical/>
						<n-text type="info">欧奎家兽装工作室 (群号: 1040074195)</n-text>
					</n-flex>
				</div>
			</n-flex>
		</n-card>

		<n-card size="small" title="版权">
			<n-image :src="license_32c9a19123e26cc595ffbdcaf07a9cbd42a760ce" :img-props="{ class: 'w-full' }"/>
		</n-card>
	</n-flex>
</template>