<script lang="ts" setup>
import CustomNaiveAutoStack from '@/components/custom/naive/auto-stack.vue'
import CustomNaiveVerticalStack from '@/components/custom/naive/vertical-stack.vue'
import CustomRedirect from '@/components/custom/redirect.vue'
import { useDatabase, useDatabaseFile, useDatabaseValue } from '@/composables/database'
import type FriendLink from '@/database/tables/friend_link'
import { isMobile } from '@/shared/responsive'
import { NCard, NDivider, NElement, NImage, NText } from 'naive-ui'
import { isEmptyish, isNonNullish, isNullish, merge } from 'remeda'
import { computed } from 'vue'

defineOptions({
	name: 'SectionsSelfFriendLinks'
})

const items = useDatabase<FriendLink[]>(async database => {
	return database.friend_links.toArray()
})

const mappedItems = computed(() => {
	if ( isNullish(items.value) ) {
		return
	}

	return items.value.map(item => {
		return merge(item, {
			real_logo: useDatabaseFile(
				useDatabaseValue(item, 'logo')
			)
		})
	})
})
</script>

<template>
	<custom-naive-vertical-stack>
		<template v-if="!isEmptyish(items) && !isEmptyish(mappedItems)">
			<n-divider :title-placement="(isMobile ? 'center' : 'left')">友情链接</n-divider>

			<custom-naive-vertical-stack :class="{ 'text-center': isMobile }">
				<template v-for="item in mappedItems">
					<custom-redirect :href="item.href">
						<n-card size="small">
							<custom-naive-auto-stack align="center">
								<template v-if="isNonNullish(item.real_logo)">
									<n-element class="w-fit">
										<n-image :src="item.real_logo" class="h-12 rounded-full"/>
									</n-element>
								</template>

								<custom-naive-vertical-stack :size="0">
									<n-text class="fw-bold">{{ item.name }}</n-text>

									<template v-if="!isEmptyish(item.description)">
										<n-text :depth="3" class="text-sm">{{ item.description }}</n-text>
									</template>
								</custom-naive-vertical-stack>
							</custom-naive-auto-stack>
						</n-card>
					</custom-redirect>
				</template>
			</custom-naive-vertical-stack>
		</template>
	</custom-naive-vertical-stack>
</template>