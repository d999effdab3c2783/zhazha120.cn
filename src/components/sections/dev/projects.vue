<script lang="ts" setup>
	import type { Project } from '@/data/dev/projects';

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
				<custom-naive-ui-list-thing>
					<template #prefix>
						<n-icon :class="generateIcon(project)" class="size-8" />
					</template>

					<custom-naive-ui-redirect-button
						:class="[
							'size-fit',
							{
								'opacity-50': project.status === 'dead',
							},
						]"
						:href="generateUrl(project)"
						tag="a"
						text
						type="primary"
					>
						<custom-naive-ui-text-stack>
							<n-text class="text-current fw-bold">{{ project.name }}</n-text>
						</custom-naive-ui-text-stack>

						<template v-if="project.status === 'dead'" #extra>
							<n-alert class="w-full" type="error">可能已经 停止维护/被删除/转移</n-alert>
						</template>
					</custom-naive-ui-redirect-button>

					<template #suffix>
						<template v-if="project.type === 'github'">
							<n-text :depth="3" class="text-[.8em]">{{ project.owner }}/{{ project.repo }}</n-text>
						</template>
					</template>
				</custom-naive-ui-list-thing>
			</n-list-item>
		</template>
	</n-list>
</template>