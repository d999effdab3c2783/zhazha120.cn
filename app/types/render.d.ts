import type { TextProps } from 'naive-ui'

export type RenderableText =
	| string
	| (Pick<TextProps, 'type' | 'depth'> & {
			readonly text: string
	  } & Partial<{
				readonly class: string
			}>)
	| null