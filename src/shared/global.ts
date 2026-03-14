import App from '@/components/app.vue'
import routes from '@/config/routes'
import { createPinia } from 'pinia'
import { createApp, h, ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

export const container = document.createElement('div')

export const app = createApp({
	render: () => h(App)
})

export const pinia = createPinia()

export const router = createRouter({
	history: createWebHistory(),
	routes
})

export const initialized = ref(false)