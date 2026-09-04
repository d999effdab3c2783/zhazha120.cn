// oxlint-disable-next-line import/no-unassigned-import
import 'vue-router'

declare module 'vue-router' {
	interface RouteMeta {
		readonly title?: string
		readonly layout?: 'default' | 'wrapper' | 'app' | 'subpage'
	}
}

// oxlint-disable-next-line unicorn/require-module-specifiers
export {}