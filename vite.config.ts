import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import VueRouter from 'vue-router/vite';
import path, { resolve } from 'node:path';
import { createJiti } from 'jiti';
import { VueRouterAutoImports } from 'vue-router/unplugin';
import UnoCSS from 'unocss/vite';
import Macros from 'unplugin-macros/vite';

export default defineConfig(() => {
	const jiti = createJiti(import.meta.url, {
		alias: {
			'@': resolve(import.meta.dirname, 'src'),
		},
	});

	return {
		build: {
			assetsInlineLimit: 0,
			rolldownOptions: {
				output: {
					hashCharacters: 'base36' as const,
					assetFileNames: 'assets/[hash:21][extname]',
					entryFileNames: 'assets/[hash:21].js',
					chunkFileNames: 'assets/[hash:21].js',
				},
			},
		},
		publicDir: resolve(import.meta.dirname, 'src', 'public'),
		resolve: {
			alias: {
				'@': resolve(import.meta.dirname, 'src'),
			},
		},
		plugins: [
			Macros({
				runner: {
					resolve: (source, importer) =>
						jiti.esmResolve(source, {
							parentURL: path.dirname(importer),
						}),
					import: async (resolved) => jiti.import(resolved),
				},
				virtualModules: true,
			}),
			UnoCSS(),
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
					'@vueuse/core',
					VueRouterAutoImports,
					{
						'naive-ui': ['useDialog', 'useModal', 'useMessage', 'useNotification', 'useLoadingBar'],
					},
				],
				parser: 'oxc',
			}),
			Components({
				dts: resolve(import.meta.dirname, 'src', 'types', 'components.d.ts'),
				directoryAsNamespace: true,
				dirs: [resolve(import.meta.dirname, 'src', 'components', 'sections')],
				prefix: 'Sections',
				resolvers: [NaiveUiResolver()],
			}),
		],
	};
});