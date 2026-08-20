import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import VueRouter from 'vue-router/vite';
import { resolve } from 'node:path';

export default defineConfig({
	resolve: {
		alias: {
			'@': resolve(import.meta.dirname, 'src'),
		},
	},
	plugins: [
		VueRouter({
			dts: resolve(import.meta.dirname, 'src', 'types', 'router.d.ts'),
			routesFolder: [
				{
					src: resolve(import.meta.dirname, 'src', 'components', 'pages'),
				},
			],
		}),
		Vue(),
		AutoImport({
			dts: resolve(import.meta.dirname, 'src', 'types', 'auto-imports.d.ts'),
			imports: [
				'vue',
				'pinia',
				'vue-router',
				{
					'naive-ui': ['useDialog', 'useModal', 'useMessage', 'useNotification', 'useLoadingBar'],
				},
			],
		}),
		Components({
			dts: resolve(import.meta.dirname, 'src', 'types', 'components.d.ts'),
			directoryAsNamespace: true,
			dirs: [resolve(import.meta.dirname, 'src', 'components', 'sections')],
			prefix: 'Sections',
			resolvers: [NaiveUiResolver()],
		}),
	],
});