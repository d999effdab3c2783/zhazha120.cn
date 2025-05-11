<script lang="ts" setup>
import birthday_38114ea66a533205da322baee2629428c2bcfd1f from '~/assets/birthday_38114ea66a533205da322baee2629428c2bcfd1f.webp'
import birthday_d5cad4b281664d782379976a9df6c0f99464fffe from '~/assets/birthday_d5cad4b281664d782379976a9df6c0f99464fffe.webp'
import birthday_bb588343992ce34d7cd1f63325ab5cabf30d5ba6 from '~/assets/birthday_bb588343992ce34d7cd1f63325ab5cabf30d5ba6.webp'
import { isDesktop, isMobile } from '~/shared/responsive'
</script>

<template>
	<n-card size="small">
		<n-flex align="center" size="small" vertical>
			<span class="text-3xl fw-bold">感谢所有人的祝贺ww~</span>

			<n-scrollbar x-scrollable>
				<n-flex :justify="isDesktop ? 'space-evenly' : undefined" :vertical="isMobile" :wrap="false" align="center" size="small">
					<n-image :img-props="{ class: 'w-full' }" :src="birthday_d5cad4b281664d782379976a9df6c0f99464fffe" class="flex-1"/>
					<n-image :img-props="{ class: 'w-full' }" :src="birthday_38114ea66a533205da322baee2629428c2bcfd1f" class="flex-1"/>
				</n-flex>
			</n-scrollbar>

			<span class="text-3xl fw-bold">以及 收到了一张贺图 awa</span>

			<n-image :img-props="{ class: 'w-full' }" :src="birthday_bb588343992ce34d7cd1f63325ab5cabf30d5ba6"/>

			<n-scrollbar x-scrollable>
				<n-flex :wrap="false" justify="space-evenly" size="small">
					<span class="text-xl">左: 渣渣</span>
					<span class="text-xl">中: 墨水</span>
					<span class="text-xl">右: 临灰</span>
				</n-flex>
			</n-scrollbar>
		</n-flex>
	</n-card>
</template>