<script lang="ts" setup>
import CustomNaiveVerticalStack from '@/components/custom/naive/vertical-stack.vue'
import SectionsHomeTabsSelfDescription from '@/components/sections/home/tabs/self/description.vue'
import SectionsSelfContacts from '@/components/sections/self/contacts.vue'
import SectionsSelfDiscover from '@/components/sections/self/discover.vue'
import SectionsSelfFriendLinks from '@/components/sections/self/friend_links.vue'

defineOptions({
	name: 'SectionsHomeTabsSelf'
})
</script>

<template>
	<custom-naive-vertical-stack>
		<sections-home-tabs-self-description/>
		<sections-self-contacts/>
		<sections-self-discover/>
		<sections-self-friend-links/>
	</custom-naive-vertical-stack>
</template>