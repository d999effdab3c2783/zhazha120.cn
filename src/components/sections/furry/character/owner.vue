<script lang="ts" setup>
	import { isNonNullish } from 'remeda';

	import type { CharacterEntry } from '@/data/furry/characters';

	defineProps<CharacterEntry>();
</script>

<template>
	<custom-naive-ui-position cover placement="center-right">
		<template v-if="isNonNullish(owner)">
			<custom-naive-ui-horizontal-stack align="center">
				<custom-naive-ui-text-stack>
					<n-text>所有者: </n-text>
				</custom-naive-ui-text-stack>

				<template v-if="isNonNullish(owner.href)">
					<custom-naive-ui-redirect-button :href="owner.href" tag="a" text type="primary">
						<custom-naive-ui-text-stack>
							<n-text class="text-current fw-bold">
								{{ owner.name }}
							</n-text>
						</custom-naive-ui-text-stack>
					</custom-naive-ui-redirect-button>
				</template>

				<template v-else>
					<n-text>{{ owner.name }}</n-text>
				</template>
			</custom-naive-ui-horizontal-stack>
		</template>
	</custom-naive-ui-position>
</template>