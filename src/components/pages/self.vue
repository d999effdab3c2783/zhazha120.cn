<script lang="ts" setup>
    import LayoutsSubPage from "@/components/layouts/sub-page.vue";
    import SectionsSelfContacts from "@/components/sections/self/contacts.vue";
    import SectionsSelfDescription from "@/components/sections/self/description.vue";
    import SectionsSelfDiscover from "@/components/sections/self/discover.vue";
    import SectionsSelfFriendLinks from "@/components/sections/self/friend_links.vue";
</script>

<template>
    <layouts-sub-page>
        <sections-self-description />
        <sections-self-contacts />
        <sections-self-discover />
        <sections-self-friend-links />
    </layouts-sub-page>
</template>