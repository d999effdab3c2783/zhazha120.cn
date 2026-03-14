<script lang="ts" setup>
import CustomNaiveVerticalStack from '@/components/custom/naive/vertical-stack.vue'
import SectionsGameMalodyContacts from '@/components/sections/game/malody/contacts.vue'
import SectionsGameMalodyDownloads from '@/components/sections/game/malody/downloads.vue'
import SectionsGameMalodyTimelines from '@/components/sections/game/malody/timelines.vue'
import SectionsGameMalodyV3Dan from '@/components/sections/game/malody/v3_dan.vue'
</script>

<template>
	<custom-naive-vertical-stack>
		<sections-game-malody-v3-dan/>
		<sections-game-malody-timelines/>
		<sections-game-malody-contacts/>
		<sections-game-malody-downloads/>
	</custom-naive-vertical-stack>
</template>