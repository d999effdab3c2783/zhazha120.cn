<template>
    <n-flex :size="0" class="w-full" vertical>
        <n-divider dashed>
            <n-element class="leading-tight">
                <n-flex :size="0" align="center" vertical>
                    <n-h2 class="fw-extrabold !mb-0">{{ $t("pages.furry:divider:name") }}</n-h2>

                    <template v-if="$te('pages.furry:divider:description')">
                        <n-text :depth="3">{{ $t("pages.furry:divider:description") }}</n-text>
                    </template>
                </n-flex>
            </n-element>
        </n-divider>

        <n-flex class="w-full" size="small" vertical></n-flex>
    </n-flex>
</template>