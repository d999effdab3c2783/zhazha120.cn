<template>
    <n-flex :size="0" class="w-full" vertical>
        <n-divider dashed>
            <n-h2 class="fw-extrabold !mb-0">开发</n-h2>
        </n-divider>

        <n-flex class="w-full" size="small" vertical>
            <SectionsHome2DevDescription />
            <SectionsHome2DevCodetime />
            <SectionsHome2DevStacks />

            <n-divider>技术履历</n-divider>

            <SectionsHome2DevOrganizations />
        </n-flex>
    </n-flex>
</template>