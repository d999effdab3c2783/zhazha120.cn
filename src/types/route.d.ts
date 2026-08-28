import 'vue-router';

declare module 'vue-router' {
	interface RouteMeta {
		readonly layout?: 'default' | 'wrapper' | 'app' | 'subpage';
	}
}

export {};