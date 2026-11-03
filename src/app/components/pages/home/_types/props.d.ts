export type Member = {
	readonly name: string
} & Partial<{
	readonly avatar:
		| ({
				readonly src: string
		  } & Partial<{
				readonly poke: string
		  }>)
		| null
}>