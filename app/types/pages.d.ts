import type { MaybeRefOrGetter } from 'vue'

declare module 'nuxt/app' {
	interface PageMeta {
		readonly title: MaybeRefOrGetter<string>
	}
}

// oxlint-disable-next-line unicorn/require-module-specifiers
export {}