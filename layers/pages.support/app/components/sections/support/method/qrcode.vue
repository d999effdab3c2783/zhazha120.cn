<script lang="ts" setup>
    import type { QrCodeMethod } from "#layers/pages.support/app/types/support";
    import selfInformationConfig from "#layers/pages.self/config/information";
    import supportConfig from "#layers/pages.support/config/support";
    import { isNonNullish } from "remeda";

    defineProps<{
        readonly method: QrCodeMethod;
    }>();
</script>

<template>
    <template v-if="isNonNullish(method.image) || isNonNullish(method.content)">
        <n-card
            :title="isNonNullish(method.name) ? guessLocale(method.name) : undefined"
            size="small"
        >
            <template v-if="isNonNullish(method.image)">
                <n-flex justify="center">
                    <n-image :src="method.image" />
                </n-flex>
            </template>

            <template v-if="isNonNullish(method.content)" #action>
                <n-flex align="center" size="small" vertical>
                    <n-qr-code
                        :icon-src="selfInformationConfig.avatar.src"
                        :size="supportConfig.fallback_qrcode_size"
                        :value="method.content"
                        class="box-content"
                        icon-background-color="transparent"
                    />

                    <n-text>{{ $t("pages.support:fallback") }}</n-text>
                </n-flex>
            </template>
        </n-card>
    </template>
</template>