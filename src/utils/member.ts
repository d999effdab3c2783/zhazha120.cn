import type { Params, Props } from '@/pages/[...member]/_types/shared'
import type { CollectionEntry } from 'astro:content'

import { getCollection, getEntry } from 'astro:content'
import { isNotNil } from 'es-toolkit'

type MemberEntry = CollectionEntry<'members'>

export const useMemberRoutes = async (
	options: Partial<{
		readonly filter: (item: MemberEntry) => boolean
	}> = {}
) => {
	const members = await getCollection('members')

	const paths: {
		readonly params: Params
		readonly props: Props
	}[] = []

	members
		.filter(member => {
			if (
				isNotNil(import.meta.env.PUBLIC__DEFAULT_MEMBER) &&
				member.id === import.meta.env.PUBLIC__DEFAULT_MEMBER
			) {
				return false
			}

			if (
				isNotNil(options.filter) &&
				!options.filter(member) //
			) {
				return false
			}

			return true
		})
		.forEach(member => {
			paths.push({
				params: {
					member: member.id
				},
				props: {
					member
				}
			})
		})

	if (isNotNil(import.meta.env.PUBLIC__DEFAULT_MEMBER)) {
		const defaultMember = await getEntry('members', import.meta.env.PUBLIC__DEFAULT_MEMBER)

		if (isNotNil(defaultMember)) {
			paths.push({
				params: {
					member: undefined
				},
				props: {
					member: defaultMember
				}
			})
		}
	}

	return paths
}