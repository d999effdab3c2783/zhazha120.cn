<script lang="ts" setup>
import CustomHorizontalScroll from '@/components/custom/naive/horizontal-scroll.vue'
import CustomNaivePosition from '@/components/custom/naive/position.vue'
import { NSwitch, NTable } from 'naive-ui'

defineOptions({
	name: 'SectionsGameMinecraftSkinview3dVisibleSwitch'
})

const value = defineModel<
	Record<string, boolean>
>('value', {
	required: true
})

const layers = [
	{
		label: '内层',
		value: 'innerLayer'
	},
	{
		label: '外层',
		value: 'outerLayer'
	}
] as const

const parts = [
	{
		label: '头',
		value: 'head'
	},
	{
		label: '身体',
		value: 'body'
	},
	{
		label: '左臂',
		value: 'leftArm'
	},
	{
		label: '右臂',
		value: 'rightArm'
	},
	{
		label: '左腿',
		value: 'leftLeg'
	},
	{
		label: '右腿',
		value: 'rightLeg'
	}
] as const
</script>

<template>
	<custom-horizontal-scroll>
		<n-table>
			<thead>
			<tr>
				<th/>

				<template v-for="part in parts">
					<th>{{ part.label }}</th>
				</template>
			</tr>
			</thead>

			<tbody>
			<tr v-for="layer in layers">
				<td>{{ layer.label }}</td>

				<template v-for="part in parts">
					<td>
						<custom-naive-position class="w-full" placement="center">
							<n-switch v-model:value="value[`${layer.value}.${part.value}`]" :default-value="true"/>
						</custom-naive-position>
					</td>
				</template>
			</tr>
			</tbody>
		</n-table>
	</custom-horizontal-scroll>
</template>