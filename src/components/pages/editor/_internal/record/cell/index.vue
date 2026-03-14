<script lang="ts" setup>
import ArrayCell from '@/components/pages/editor/_internal/record/cell/array.vue'
import BlobCell from '@/components/pages/editor/_internal/record/cell/blob.vue'
import ColorCell from '@/components/pages/editor/_internal/record/cell/color.vue'
import DateCell from '@/components/pages/editor/_internal/record/cell/date.vue'
import EmptyCell from '@/components/pages/editor/_internal/record/cell/empty.vue'
import IconCell from '@/components/pages/editor/_internal/record/cell/icon.vue'
import MarkdownCell from '@/components/pages/editor/_internal/record/cell/markdown.vue'
import SwitchCell from '@/components/pages/editor/_internal/record/cell/switch.vue'
import TextCell from '@/components/pages/editor/_internal/record/cell/text.vue'
import config from '@/config/database'
import type { RecordObject } from '@/types/shared'
import { NDivider, NFlex, NText } from 'naive-ui'
import { isArray, isBoolean, isNonNullish, isNumber, isString } from 'remeda'
import { computed, ref } from 'vue'

const props = defineProps<{
	readonly record: RecordObject
	readonly value: unknown
}>()

const reference = ref<string>()

const real = computed(() => {
	if (
		isString(props.value) &&
		props.value.startsWith(config.reference_prefix)
	) {
		const name = props.value.split(config.reference_prefix, 2)[1]

		if ( isNonNullish(name) ) {
			reference.value = name
			return props.record[name]
		}
	}

	return props.value
})

const type = computed(() => {
	if ( isNumber(real.value) ) {
		return 'text'
	}

	if ( isString(real.value) ) {
		if ( real.value.startsWith('i-') ) {
			return 'icon'
		}

		if ( CSS.supports('color', real.value) ) {
			return 'color'
		}

		if ( real.value.includes('T') && real.value.endsWith('Z') ) {
			return 'date'
		}

		if (
			(
				real.value.includes(':') &&
				real.value.includes('[')
			) ||
			real.value.startsWith('http') ||
			real.value.includes('@')
		) {
			if ( real.value.startsWith('http') ) {
				return 'markdown'
			}

			return 'markdown:hide'
		}

		return 'text'
	}

	if ( isArray(real.value) ) {
		return 'array'
	}

	if ( real.value instanceof Blob ) {
		return 'blob'
	}

	if ( isBoolean(real.value) ) {
		return 'switch'
	}

	return 'empty'
})

const isBlob = (value: unknown): value is Blob => {
	return value instanceof Blob
}
</script>

<template>
	<n-flex align="center" size="small">
		<template v-if="isNonNullish(reference)">
			<n-text :depth="3">引用: {{ reference }}</n-text>

			<n-divider vertical/>
		</template>

		<template v-if="isString(real) || isNumber(real)">
			<template v-if="(type === 'text')">
				<text-cell :value="real"/>
			</template>

			<template v-if="isString(real)">
				<template v-if="(type === 'icon')">
					<icon-cell :value="real"/>
				</template>

				<template v-if="(type === 'color')">
					<color-cell :value="real"/>
				</template>

				<template v-if="(type === 'date')">
					<date-cell :value="real"/>
				</template>

				<template v-if="type.startsWith('markdown')">
					<markdown-cell :show="!type.endsWith(':hide')" :value="real"/>
				</template>
			</template>
		</template>

		<template v-if="isArray(real)">
			<template v-if="(type === 'array')">
				<array-cell :value="real"/>
			</template>
		</template>

		<template v-if="isBlob(real)">
			<template v-if="(type === 'blob')">
				<blob-cell :value="real"/>
			</template>
		</template>

		<template v-if="isBoolean(real)">
			<template v-if="(type === 'switch')">
				<switch-cell :value="real"/>
			</template>
		</template>

		<template v-if="(type === 'empty')">
			<empty-cell/>
		</template>
	</n-flex>
</template>