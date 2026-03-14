<script lang="ts" setup>
import CustomNaiveVerticalStack from '@/components/custom/naive/vertical-stack.vue'
import SectionsDevAwards from '@/components/sections/dev/awards.vue'
import SectionsDevDescription from '@/components/sections/dev/description.vue'
import SectionsDevOrganizations from '@/components/sections/dev/organizations.vue'
import SectionsDevProjects from '@/components/sections/dev/projects.vue'
import SectionsDevStacks from '@/components/sections/dev/stacks.vue'
import { isMobile } from '@/shared/responsive'
import { NDivider } from 'naive-ui'

defineOptions({
	name: 'SectionsHomeTabsDev'
})
</script>

<template>
	<custom-naive-vertical-stack>
		<sections-dev-description/>
		<sections-dev-stacks/>

		<n-divider :title-placement="(isMobile ? 'center' : 'left')">做过的东西</n-divider>

		<sections-dev-organizations/>
		<sections-dev-projects/>

		<n-divider :title-placement="(isMobile ? 'center' : 'left')">打过的比赛</n-divider>

		<sections-dev-awards/>
	</custom-naive-vertical-stack>
</template>