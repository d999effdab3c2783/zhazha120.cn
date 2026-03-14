<script lang="ts">
export interface Item {
	readonly name: string | null
	readonly type: 'auto' | 'text' | 'number' | 'color' | 'markdown' | 'reference' | 'icon' | 'array' | 'blob' | 'switch' | null
	readonly value: unknown
}
</script>

<script lang="ts" setup>
import CustomNaiveButton from '@/components/custom/naive/button.vue'
import type { RecordObject } from '@/types/shared'
import type { IndexSpec, Table } from 'dexie'
import AutoControl from '@/components/pages/editor/_internal/record/form/auto.vue'
import { NDynamicInput, NFlex, NForm, NFormItem, NInput, NSelect, NButtonGroup, type SelectOption } from 'naive-ui'
import { isArray, isBoolean, isNonNullish, isNumber, isString, prop } from 'remeda'
import { computed, ref, toRaw } from 'vue'
import NumberControl from '@/components/pages/editor/_internal/record/form/number.vue'
import TextControl from '@/components/pages/editor/_internal/record/form/text.vue'
import ColorControl from '@/components/pages/editor/_internal/record/form/color.vue'
import MarkdownControl from '@/components/pages/editor/_internal/record/form/markdown.vue'
import SwitchControl from '@/components/pages/editor/_internal/record/form/switch.vue'
import ArrayControl from '@/components/pages/editor/_internal/record/form/array.vue'
import IconControl from '@/components/pages/editor/_internal/record/form/icon.vue'
import ReferenceControl from '@/components/pages/editor/_internal/record/form/reference.vue'
import BlobControl from '@/components/pages/editor/_internal/record/form/blob.vue'
import config from '@/config/database'

const props = defineProps<{
	readonly table: Table
	readonly record: RecordObject
}>()

const emits = defineEmits<{
	(event: 'submit', record: RecordObject): void
}>()

const typeOptions = [
	{
		label: '自动',
		value: 'auto'
	},
	{
		label: '文本',
		value: 'text'
	},
	{
		label: '数字',
		value: 'number'
	},
	{
		label: '颜色',
		value: 'color'
	},
	{
		label: 'Markdown',
		value: 'markdown'
	},
	{
		label: '引用',
		value: 'reference'
	},
	{
		label: '图标',
		value: 'icon'
	},
	{
		label: '二进制',
		value: 'blob'
	},
	{
		label: '数组',
		value: 'array'
	},
	{
		label: '开关',
		value: 'switch'
	}
] satisfies SelectOption[]

const guessType = (index: IndexSpec | null, value: unknown): Item['type'] => {
	if ( isNonNullish(index) ) {
		if ( index.auto ) {
			return 'auto'
		}
	}

	if ( isNonNullish(value) ) {
		if ( isString(value) ) {
			if ( CSS.supports('color', value) ) {
				return 'color'
			}

			if ( value.includes(':') && value.includes('[') ) {
				return 'markdown'
			}

			if ( value.startsWith(config.reference_prefix) ) {
				return 'reference'
			}

			if ( value.startsWith('i-') ) {
				return 'icon'
			}

			return 'text'
		}

		if ( isNumber(value) ) {
			return 'number'
		}

		if ( isArray(value) ) {
			return 'array'
		}

		if ( isBoolean(value) ) {
			return 'switch'
		}

		if ( value instanceof Blob ) {
			return 'blob'
		}
	}

	return null
}

const handleCreate = () => {
	return {
		name: null,
		type: null,
		value: null
	} satisfies Item
}

const handleSubmit = async () => {
	const record = Object.fromEntries(
		data.value.map(item => {
			if ( item.type === 'auto' ) {
				return null
			}

			return [
				item.name,
				toRaw(item.value)
			]
		}).filter(isNonNullish)
	)

	emits('submit', record)
}

const data = ref<Item[]>([
	...[
		props.table.schema.primKey,
		...props.table.schema.indexes
	].map(index => {
		const value = isNonNullish(props.record[index.name]) ? props.record[index.name] : null

		return {
			name: index.name,
			type: index.auto ? 'auto' : guessType(index, value),
			value
		} satisfies Item
	}),
	...isNonNullish(props.record) ? Object.keys(props.record).map(name => {
		if ( [
			props.table.schema.primKey,
			...props.table.schema.indexes
		].some(item => name === item.name) ) {
			return
		}

		if ( isNonNullish(props.record[name]) ) {
			const value = props.record[name]

			return {
				name,
				type: guessType(null, value),
				value
			} satisfies Item
		}
	}).filter(isNonNullish) : []
])

const tableKeys = computed(() => {
	return data.value.map(
		prop('name')
	).filter(isNonNullish)
})
</script>

<template>
	<n-form @submit.prevent="handleSubmit">
		<n-dynamic-input v-model:value="data" @create="handleCreate">
			<template #default="{ value: item }">
				<n-form-item :show-label="false" class="w-full">
					<n-flex class="w-full" size="small" vertical>
						<n-flex :wrap="false" class="w-full" size="small">
							<n-input v-model:value="item.name"/>
							<n-select v-model:value="item.type" :options="typeOptions"/>
						</n-flex>

						<template v-if="(item.type === 'auto')">
							<auto-control :value="(item.value ?? '')"/>
						</template>

						<template v-if="(item.type === 'text')">
							<text-control :value="(item.value ?? '')" @update:value="newValue => item.value = newValue"/>
						</template>

						<template v-if="(item.type === 'number')">
							<number-control :value="(item.value ?? '')" @update:value="newValue => item.value = newValue"/>
						</template>

						<template v-if="(item.type === 'color')">
							<color-control :value="(item.value ?? '')" @update:value="newValue => item.value = newValue"/>
						</template>

						<template v-if="(item.type === 'markdown')">
							<markdown-control :value="(item.value ?? '')" @update:value="newValue => item.value = newValue"/>
						</template>

						<template v-if="(item.type === 'reference')">
							<reference-control :keys="tableKeys" :value="(item.value ?? '')" @update:value="newValue => item.value = newValue"/>
						</template>

						<template v-if="(item.type === 'icon')">
							<icon-control :value="(item.value ?? '')" @update:value="newValue => item.value = newValue"/>
						</template>

						<template v-if="(item.type === 'array')">
							<array-control :value="(item.value ?? [])" @update:value="newValue => item.value = newValue"/>
						</template>

						<template v-if="(item.type === 'blob')">
							<blob-control :value="(item.value ?? null)" @upload="newValue => item.value = newValue"/>
						</template>

						<template v-if="(item.type === 'switch')">
							<switch-control :value="(item.value ?? false)" @update:value="newValue => item.value = newValue"/>
						</template>
					</n-flex>
				</n-form-item>
			</template>

			<template #action="{ create, remove, index }">
				<n-button-group class="ml-2">
					<custom-naive-button icon="i-ant-design:minus-outlined" size="tiny" @click="remove(index)"/>
					<custom-naive-button icon="i-ant-design:plus-outlined" size="tiny" @click="create(index)"/>
				</n-button-group>
			</template>
		</n-dynamic-input>

		<n-form-item :show-feedback="false" :show-label="false">
			<custom-naive-button attr-type="submit" icon="i-ant-design:send-outlined">提交</custom-naive-button>
		</n-form-item>
	</n-form>
</template>