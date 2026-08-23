// oxlint-disable-next-line import/no-unassigned-import
import 'virtual:uno.css';

import App from '@/components/app.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { handleHotUpdate, routes } from 'vue-router/auto-routes';

(() => {
	const container = document.createElement('div');

	const app = createApp({
		render: () => h(App),
	});

	const pinia = createPinia();
	const router = createRouter({
		history: createWebHistory(),
		routes,
	});

	if (import.meta.hot) {
		handleHotUpdate(router);
	}

	app.use(pinia);
	app.use(router);
	app.mount(container);

	document.body.append(container);
})();