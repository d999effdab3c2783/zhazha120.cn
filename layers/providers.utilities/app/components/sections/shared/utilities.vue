<script lang="ts" setup>
	const utilitiesStore = useUtilitiesStore();
</script>

<template>
	<n-flex size="small" align="center">
		<template v-for="{ icon, name, render } in utilitiesStore.registry">
			<NaiveModalWrapper :title="name" preset="card" size="small">
				<template #trigger="{ toggle }">
					<n-button secondary size="small" @click="toggle">
						<template #icon>
							<n-icon :class="icon" />
						</template>

						{{ name }}
					</n-button>
				</template>

				<Component :is="render" />
			</NaiveModalWrapper>
		</template>
	</n-flex>
</template>