<script lang="ts" setup>
import CustomNaiveVerticalStack from '@/components/custom/naive/vertical-stack.vue'
import SectionsGameTetrioBackground from '@/components/sections/game/tetrio/background.vue'
import SectionsGameTetrioContacts from '@/components/sections/game/tetrio/contacts.vue'
import SectionsGameTetrioDownloads from '@/components/sections/game/tetrio/downloads.vue'
import SectionsGameTetrioOverlay from '@/components/sections/game/tetrio/overlay.vue'
import SectionsGameTetrioTimelines from '@/components/sections/game/tetrio/timelines/index.vue'
</script>

<template>
	<custom-naive-vertical-stack>
		<sections-game-tetrio-overlay/>
		<sections-game-tetrio-timelines/>
		<sections-game-tetrio-background/>
		<sections-game-tetrio-contacts/>
		<sections-game-tetrio-downloads/>
	</custom-naive-vertical-stack>
</template>