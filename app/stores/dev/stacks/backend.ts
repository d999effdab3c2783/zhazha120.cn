import type { DevStack } from '~/types/dev'

// @unocss-include

export default {
	items: [
		{
			href: 'https://nodejs.org',
			icon: 'i-devicon:nodejs',
			name: 'Node.js'
		},
		{
			href: 'https://python.org',
			icon: 'i-logos:python',
			name: 'Python'
		},
		{
			href: 'https://learn.microsoft.com/zh-cn/dotnet/csharp',
			icon: 'i-devicon:csharp',
			name: 'C#'
		},
		{
			href: 'https://java.com',
			icon: 'i-logos:java',
			name: 'Java'
		},
		{
			href: 'https://php.net',
			icon: 'i-logos:php',
			name: 'PHP'
		},
		{
			href: 'https://go.dev',
			icon: 'i-logos:go',
			name: 'Go'
		},
		{
			href: 'https://getcomposer.org',
			icon: 'i-logos:composer',
			name: 'Composer'
		},
		{
			href: 'https://laravel.com',
			icon: 'i-logos:laravel',
			name: 'Laravel'
		}
	] as const,
	name: '后端',
	sort: 3
} as const satisfies DevStack