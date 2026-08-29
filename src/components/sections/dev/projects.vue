<script lang="ts" setup>
	import type { Project } from '@/data/dev/projects';

	import CustomRedirectWrapper from '@/components/custom/redirect-wrapper.vue';
	import projectsData from '@/data/dev/projects' with { type: 'macro' };

	const generateIcon = (project: Project) => {
		switch (project.type) {
			case 'github':
				return 'i-ant-design:github-outlined';
			case 'custom':
				return 'i-ant-design:link-outlined';
		}
	};

	const generateUrl = (project: Project) => {
		switch (project.type) {
			case 'github':
				return `https://github.com/${project.owner}/${project.repo}`;
			case 'custom':
				return project.href;
		}
	};
</script>

<template>
	<n-list>
		<template v-for="project in projectsData">
			<n-list-item>
				<n-flex :wrap="false" align="center" size="small">
					<n-icon :class="generateIcon(project)" class="size-8" />

					<n-flex size="small" vertical>
						<custom-redirect-wrapper :href="generateUrl(project)">
							<template #default="{ redirect, aProps }">
								<n-button
									:class="[
										'size-fit',
										{
											'opacity-50': project.status === 'dead',
										},
									]"
									size="small"
									tag="a"
									text
									type="primary"
									v-bind="aProps"
									@click.prevent="redirect"
								>
									<n-text class="text-(current start wrap) fw-bold">
										{{ project.name }}
									</n-text>
								</n-button>
							</template>

							<template v-if="project.status === 'dead'" #extra>
								<n-alert class="w-full" type="error">可能已经 停止维护/被删除/转移</n-alert>
							</template>
						</custom-redirect-wrapper>

						<template v-if="project.type === 'github'">
							<n-text :depth="3" class="leading-tight">{{ project.owner }}/{{ project.repo }}</n-text>
						</template>
					</n-flex>
				</n-flex>
			</n-list-item>
		</template>
	</n-list>
</template>