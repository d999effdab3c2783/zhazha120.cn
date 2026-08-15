<template>
    <n-flex :size="0" class="w-full" vertical>
        <n-divider dashed>
            <n-h2 class="fw-extrabold !mb-0">{{ $t("pages.self:name") }}</n-h2>
        </n-divider>

        <n-flex class="w-full" size="small" vertical>
            <SectionsHome2SelfDescription />
            <SectionsHome2SelfContacts />
            <SectionsHome2SelfDiscover />
        </n-flex>
    </n-flex>
</template>