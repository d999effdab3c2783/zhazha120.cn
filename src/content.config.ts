import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

const members = defineCollection({
	loader: glob({
		base: 'src/collections/members',
		pattern: '**/*.json'
	}),
	schema: ({ image }) =>
		z.object({
			avatar: z
				.object({
					image: image(),
					poke: z.string().optional()
				})
				.optional(),
			name: z.string()
		})
})

export const collections = {
	members
}