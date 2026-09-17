export default {
	avatar: {
		src: new URL('./assets/avatar.svg', import.meta.url),
		poke: '戳哭了 哄不好了'
	},
	name: '渣渣120'
} as const satisfies {
	readonly avatar: {
		readonly src: URL
		readonly poke: string
	}

	readonly name: string
}