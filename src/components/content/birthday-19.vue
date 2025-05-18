<script lang="ts" setup>
import birthday_35e2a5a3358f5644242a2460b1fab4e6f07df986 from '~/assets/birthday_35e2a5a3358f5644242a2460b1fab4e6f07df986.webp'
import birthday_38114ea66a533205da322baee2629428c2bcfd1f from '~/assets/birthday_38114ea66a533205da322baee2629428c2bcfd1f.webp'
import birthday_d5cad4b281664d782379976a9df6c0f99464fffe from '~/assets/birthday_d5cad4b281664d782379976a9df6c0f99464fffe.webp'
import birthday_d6d9967d10d056dc84bf3be1a2bb753d04742ef6 from '~/assets/birthday_d6d9967d10d056dc84bf3be1a2bb753d04742ef6.webp'
import birthday_f76f3f31b8f93153e09419e2c8fd5d73fe79b5d7 from '~/assets/birthday_f76f3f31b8f93153e09419e2c8fd5d73fe79b5d7.webp'
import birthday_b8f0da64aa005de239fa675aaa8c067a16d1809a from '~/assets/birthday_b8f0da64aa005de239fa675aaa8c067a16d1809a.webp'
import { isDesktop, isMobile } from '~/shared/responsive'
</script>

<template>
	<iframe class="border-none w-full" src="https://music.163.com/outchain/player?type=2&id=2680046302&auto=0"/>

	<n-card size="small">
		<n-flex align="center" size="small" vertical>
			<n-divider>
				<span class="text-3xl fw-bold">感谢所有人的祝贺ww~</span>
			</n-divider>

			<n-flex :justify="isDesktop ? 'space-evenly' : undefined" :vertical="isMobile" :wrap="false" align="center" size="small">
				<n-image :img-props="{ class: 'w-full' }" :src="birthday_d5cad4b281664d782379976a9df6c0f99464fffe" class="flex-1"/>
				<n-image :img-props="{ class: 'w-full' }" :src="birthday_38114ea66a533205da322baee2629428c2bcfd1f" class="flex-1"/>
			</n-flex>

			<n-divider>
				<span class="text-3xl fw-bold">一份礼物</span>
			</n-divider>

			<n-image :img-props="{ class: 'w-full' }" :src="birthday_b8f0da64aa005de239fa675aaa8c067a16d1809a"/>

			<n-divider>
				<span class="text-3xl fw-bold">未完善的设定</span>
			</n-divider>

			<n-image :img-props="{ class: 'w-full' }" :src="birthday_d6d9967d10d056dc84bf3be1a2bb753d04742ef6"/>

			<span>并非最终版本, 只是为了和本体卡在同一天生日 🤔 还在构思其它的花纹~</span>

			<n-divider>
				<span class="text-3xl fw-bold">以及 收到的贺图 awa</span>
			</n-divider>

			<n-image :img-props="{ class: 'w-full' }" :src="birthday_35e2a5a3358f5644242a2460b1fab4e6f07df986"/>

			<n-scrollbar x-scrollable>
				<n-flex :wrap="false" justify="space-evenly" size="small">
					<span>左: 渣渣</span>
					<span>中: 墨水</span>
					<span>右: 临灰</span>
				</n-flex>
			</n-scrollbar>

			<n-text :depth="3" class="text-xl fw-bold">还做成动态壁纸了 awa</n-text>

			<div class="h-10"/>

			<n-image :img-props="{ class: 'w-full' }" :src="birthday_f76f3f31b8f93153e09419e2c8fd5d73fe79b5d7"/>
		</n-flex>
	</n-card>
</template>