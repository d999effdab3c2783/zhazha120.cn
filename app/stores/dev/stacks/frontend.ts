import type { DevStack } from '~/types/dev'

// @unocss-include

export default {
	items: [
		{
			href: 'https://yarnpkg.com',
			icon: 'i-logos:yarn',
			name: 'Yarn'
		},
		{
			href: 'https://pnpm.io',
			icon: 'i-logos:pnpm',
			name: 'Pnpm'
		},
		{
			href: 'https://bun.sh',
			icon: 'i-devicon:bun',
			name: 'Bun'
		},
		{
			href: 'https://typescriptlang.org',
			icon: 'i-devicon:typescript',
			name: 'TypeScript'
		},
		{
			href: 'https://vitejs.dev',
			icon: 'i-logos:vitejs',
			name: 'Vite'
		},
		{
			href: 'https://sass-lang.com',
			icon: 'i-logos:sass',
			name: 'Sass & Scss'
		},
		{
			href: 'https://tailwindcss.com',
			icon: 'i-devicon:tailwindcss',
			name: 'TailwindCSS'
		},
		{
			href: 'https://unocss.dev',
			icon: 'i-logos:unocss',
			name: 'UnoCSS'
		},
		{
			href: 'https://vuejs.org',
			icon: 'i-logos:vue',
			name: 'Vue'
		},
		{
			href: 'https://nuxt.com',
			icon: 'i-devicon:nuxtjs',
			name: 'Nuxt'
		},
		{
			href: 'https://naiveui.com',
			icon: 'i-logos:naiveui',
			name: 'Naive UI'
		}
	] as const,
	name: '前端',
	sort: 2
} as const satisfies DevStack