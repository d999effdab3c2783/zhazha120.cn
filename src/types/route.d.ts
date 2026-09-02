import 'vue-router';

declare module 'vue-router' {
	interface RouteMeta {
		readonly title?: string;
		readonly layout?: 'default' | 'wrapper' | 'app' | 'subpage';
	}
}

export {};