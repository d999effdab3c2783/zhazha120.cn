<script lang="ts" setup>
import LayoutsSubPage from '@/components/layouts/sub-page.vue'
import SectionsAboutFurryEvent from '@/components/sections/about/furry-event.vue'
import SectionsAboutIntro from '@/components/sections/about/intro.vue'
import SectionsSelfContacts from '@/components/sections/self/contacts.vue'
import SectionsSelfDescription from '@/components/sections/self/description.vue'
import SectionsSelfDiscover from '@/components/sections/self/discover.vue'
</script>

<template>
	<layouts-sub-page>
		<sections-about-intro/>

		<sections-self-description/>
		<sections-self-contacts/>
		<sections-self-discover/>

		<sections-about-furry-event/>
	</layouts-sub-page>
</template>