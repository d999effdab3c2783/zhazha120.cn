import type { TextProps } from 'naive-ui'

export type RenderableText =
	| string
	| Partial<
			Pick<TextProps, 'type' | 'depth'> & {
				readonly text: string
			} & {
				readonly class: string
			}
	  >
	| null