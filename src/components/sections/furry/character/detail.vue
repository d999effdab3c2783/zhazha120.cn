<script lang="ts" setup>
	import { isNonNullish, isNullish } from 'remeda';

	import type { CharacterEntry } from '@/data/furry/characters';

	defineProps<CharacterEntry>();

	const { isMobile } = useResponsive();
</script>

<template>
	<custom-naive-ui-auto-stack>
		<n-image
			:class="{
				'max-w-60': !isMobile,
			}"
			:img-props="{
				class: 'size-full',
			}"
			:src="illustration.src"
		/>

		<custom-naive-ui-vertical-stack>
			<custom-naive-ui-text-stack>
				<custom-naive-ui-horizontal-stack :size="0" align="center">
					<template v-if="isNonNullish(slug)">
						<custom-naive-ui-redirect-button
							:href="`/furry/characters/${slug}`"
							tag="a"
							text
							type="primary"
						>
							<custom-naive-ui-text-stack>
								<n-text class="text-(current [1.2em]) fw-bold">{{ name }}</n-text>
							</custom-naive-ui-text-stack>
						</custom-naive-ui-redirect-button>
					</template>

					<template v-else>
						<custom-naive-ui-text-stack class="leading-none">
							<n-text class="text-[1.2em]">{{ name }}</n-text>
						</custom-naive-ui-text-stack>
					</template>

					<template v-if="isNonNullish(species_alias)">
						<n-divider vertical />

						<custom-naive-ui-horizontal-stack align="center" class="!gap-.5">
							<n-text :depth="3" class="text-[.9em]">物种: </n-text>
							<n-text :depth="3">{{ species_alias }}</n-text>
						</custom-naive-ui-horizontal-stack>
					</template>
				</custom-naive-ui-horizontal-stack>
			</custom-naive-ui-text-stack>

			<n-element
				:class="{
					'mt-1': isNullish(species_alias),
				}"
			>
				<custom-naive-ui-horizontal-stack>
					<template v-for="{ name, percent } in species">
						<n-tag>{{ percent }}% {{ name }}</n-tag>
					</template>
				</custom-naive-ui-horizontal-stack>
			</n-element>

			<template v-if="isNonNullish(description)">
				<n-h4 prefix="bar">{{ description }}</n-h4>
			</template>
		</custom-naive-ui-vertical-stack>
	</custom-naive-ui-auto-stack>
</template>