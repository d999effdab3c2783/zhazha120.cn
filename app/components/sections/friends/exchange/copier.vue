<script setup lang="ts">
	import type { SelectOption } from 'naive-ui'

	import { useBrowserLocation, useClipboard } from '@vueuse/core'
	import { stringifyJSON, stringifyYAML, stringifyINI, stringifyTOML } from 'confbox'
	import { isNotNil } from 'es-toolkit'
	import { computed, reactive } from 'vue'

	import { useResponsive } from '~/composables/responsive'
	import { useApiStore } from '~/stores/api'
	import { useOwnerStore } from '~/stores/owner'

	const ownerStore = useOwnerStore()
	const browserLocation = useBrowserLocation()
	const clipboard = useClipboard()
	const apiStore = useApiStore()
	const { isMobile } = useResponsive()

	const options = reactive({
		language: 'json',

		minify: false,
		indent: 4,

		labels: {
			name: 'name',
			avatar: 'avatar',
			description: 'description',
			href: 'href'
		}
	})

	const languages: SelectOption[] = [
		{
			label: 'JSON',
			value: 'json'
		},
		{
			label: 'YAML',
			value: 'yaml'
		},
		{
			label: 'TOML',
			value: 'toml'
		},
		{
			label: 'INI',
			value: 'ini'
		}
	]

	const generated = computed(() => {
		const data = {
			[options.labels.name]: ownerStore.name,
			[options.labels.avatar]: {
				_comment: '不保证可用性, 建议自行另存一份',
				src: new URL(ownerStore.avatar, browserLocation.value.href).href
			},
			[options.labels.description]: null,
			[options.labels.href]: `https://${browserLocation.value.host}`
		}

		if (options.language === 'json') {
			return stringifyJSON(data, {
				indent: options.minify ? 0 : options.indent
			})
		}

		if (options.language === 'yaml') {
			return stringifyYAML(data, {
				indent: options.minify ? 0 : options.indent
			})
		}

		if (options.language === 'toml') {
			return stringifyTOML(data)
		}

		if (options.language === 'ini') {
			return stringifyINI(data)
		}

		return '?'
	})

	const copy = async (text: string) => {
		if (!clipboard.isSupported.value) {
			if (isNotNil(apiStore.message)) {
				apiStore.message.error('复制失败, 不支持当前环境')
			}

			return
		}

		await clipboard.copy(text)

		if (clipboard.copied.value) {
			if (isNotNil(apiStore.message)) {
				apiStore.message.success('复制成功')
			}
		}
	}
</script>

<template>
	<n-card size="small">
		<n-flex
			vertical
			size="small"
		>
			<n-flex
				size="small"
				:vertical="isMobile"
			>
				<n-form-item label="语言">
					<n-select
						class="min-w-60"
						:options="languages"
						v-model:value="options.language"
					/>
				</n-form-item>

				<n-flex size="small">
					<n-form-item label="压缩">
						<n-switch v-model:value="options.minify" />
					</n-form-item>

					<n-form-item label="缩进">
						<n-input-number
							:min="1"
							:step="1"
							v-model:value="options.indent"
						/>
					</n-form-item>
				</n-flex>
			</n-flex>

			<n-flex size="small">
				<n-flex
					vertical
					size="small"
				>
					<n-input v-model:value="options.labels.avatar" />
					<n-input v-model:value="options.labels.name" />
					<n-input v-model:value="options.labels.description" />
					<n-input v-model:value="options.labels.href" />
				</n-flex>

				<n-input
					readonly
					class="flex-1"
					type="textarea"
					v-model:value="generated"
					auto-size
				/>
			</n-flex>

			<n-button @click="copy(generated)">
				<template #icon>
					<n-icon class="i-ant-design:copy-outlined" />
				</template>

				复制
			</n-button>
		</n-flex>
	</n-card>
</template>