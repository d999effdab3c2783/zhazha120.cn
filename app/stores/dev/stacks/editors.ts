import type { DevStack } from '~/types/dev'

// @unocss-include

export default {
	items: [
		{
			href: 'https://www.jetbrains.com/idea',
			icon: 'i-logos:intellij-idea',
			name: 'IntelliJ IDEA'
		},
		{
			href: 'https://www.jetbrains.com/webstorm',
			icon: 'i-logos:webstorm',
			name: 'WebStorm'
		},
		{
			href: 'https://www.jetbrains.com/phpstorm',
			icon: 'i-logos:phpstorm',
			name: 'PhpStorm'
		},
		{
			href: 'https://www.jetbrains.com/pycharm',
			icon: 'i-logos:pycharm',
			name: 'PyCharm'
		},
		{
			href: 'https://www.jetbrains.com/goland',
			icon: 'i-logos:goland',
			name: 'GoLand'
		},
		{
			href: 'https://www.jetbrains.com/rider',
			icon: 'i-logos:rider',
			name: 'Rider'
		},
		{
			href: 'https://visualstudio.com',
			icon: 'i-logos:visual-studio',
			name: 'Visual Studio'
		},
		{
			href: 'https://code.visualstudio.com',
			icon: 'i-logos:visual-studio-code',
			name: 'Visual Studio Code'
		},
		{
			href: 'https://zed.dev',
			icon: 'i-devicon:zed',
			name: 'Zed'
		}
	] as const,
	name: '开发工具',
	sort: 1
} as const satisfies DevStack