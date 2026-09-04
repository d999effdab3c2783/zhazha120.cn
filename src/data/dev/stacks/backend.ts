import type { Stack } from '@/data/dev/stacks'

// @unocss-include

export default {
	sort: 3,
	name: '后端',

	items: [
		{
			name: 'Node.js',
			icon: 'i-devicon:nodejs',
			href: 'https://nodejs.org'
		},
		{
			name: 'Python',
			icon: 'i-logos:python',
			href: 'https://python.org'
		},
		{
			name: 'C#',
			icon: 'i-devicon:csharp',
			href: 'https://learn.microsoft.com/zh-cn/dotnet/csharp'
		},
		{
			name: 'Java',
			icon: 'i-logos:java',
			href: 'https://java.com'
		},
		{
			name: 'PHP',
			icon: 'i-logos:php',
			href: 'https://php.net'
		},
		{
			name: 'Go',
			icon: 'i-logos:go',
			href: 'https://go.dev'
		},
		{
			name: 'Composer',
			icon: 'i-logos:composer',
			href: 'https://getcomposer.org'
		},
		{
			name: 'Laravel',
			icon: 'i-logos:laravel',
			href: 'https://laravel.com'
		}
	] as const
} satisfies Stack