import "virtual:uno.css";
import "@/styles/global.scss";
import { app, container, pinia, router } from "@/shared/website";
import { MotionPlugin } from "@vueuse/motion";
import Lenis from "lenis/vue";
import PiniaPluginPersistedState from "pinia-plugin-persistedstate";
import { z } from "zod";

(async () => {
    container.classList.add("contents");

    z.config(z.locales.zhCN());

    document.body.appendChild(container);

    pinia.use(PiniaPluginPersistedState);

    app.use(pinia);
    app.use(router);

    app.use(Lenis);
    app.use(MotionPlugin);

    app.mount(container);
})();