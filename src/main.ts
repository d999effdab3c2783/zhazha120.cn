// oxlint-disable-next-line import/no-unassigned-import
import 'virtual:uno.css';
import { MotionPlugin } from '@vueuse/motion';
import LenisVue from 'lenis/vue';
import { createRouter, createWebHistory } from 'vue-router';
import { handleHotUpdate, routes } from 'vue-router/auto-routes';

import App from '@/components/app.vue';

// @unocss-include

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
	app.use(LenisVue);
	app.use(MotionPlugin);

	container.classList.add('contents');

	app.mount(container);

	document.body.append(container);
})();