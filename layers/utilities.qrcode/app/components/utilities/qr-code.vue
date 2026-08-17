<script lang="ts" setup>
    import { type QrCodeProps, useThemeVars } from "naive-ui";
    import selfInformationConfig from "#layers/pages.self/config/information";

    const location = useBrowserLocation();
    const themeVars = useThemeVars();

    const config = shallowReactive<Partial<QrCodeProps>>({
        color: themeVars.value.primaryColor,
        errorCorrectionLevel: "H",
        iconBackgroundColor: "transparent",
        iconSize: 60,
        iconSrc: selfInformationConfig.avatar.src,
        value: location.value.href,
        size: 240,
        type: "svg",
    });

    const applyPreset = (name: string) => {
        switch (name) {
            case "default":
                delete config.color;
                delete config.iconBackgroundColor;
                delete config.iconSize;
                delete config.iconSrc;
                break;
        }
    };
</script>

<template>
    <n-flex size="large" vertical>
        <n-input v-model:value="config.value" />

        <TransitionsFade appear mode="out-in">
            <template v-if="config.value !== location.href">
                <n-element class="text-sm">
                    <n-flex size="small">
                        <n-text :depth="3">
                            <i18n-t keypath="utilities.qrcode:apply_current_url">
                                <template #url>
                                    <n-text
                                        class="hover:cursor-pointer"
                                        type="info"
                                        @click="config.value = location.href"
                                    >
                                        {{ location.href }}
                                    </n-text>
                                </template>
                            </i18n-t>
                        </n-text>
                    </n-flex>
                </n-element>
            </template>
        </TransitionsFade>

        <NaivePosition placement="center">
            <n-qr-code class="box-content" v-bind="config" />
        </NaivePosition>

        <n-divider class="!my-0" />

        <n-flex justify="space-evenly" size="large">
            <n-form-item
                :label="$t('utilities.qrcode:config.backgroundColor')"
                :show-feedback="false"
                class="min-w-60"
            >
                <n-color-picker v-model:value="config.backgroundColor" default-value="#FFF" />
            </n-form-item>

            <n-form-item
                :label="$t('utilities.qrcode:config.color')"
                :show-feedback="false"
                class="min-w-60"
            >
                <n-color-picker v-model:value="config.color" default-value="#000" />
            </n-form-item>

            <n-form-item
                :label="$t('utilities.qrcode:config.errorCorrectionLevel')"
                :show-feedback="false"
            >
                <n-radio-group v-model:value="config.errorCorrectionLevel" size="small">
                    <n-radio-button value="L">L</n-radio-button>
                    <n-radio-button value="M">M</n-radio-button>
                    <n-radio-button value="Q">Q</n-radio-button>
                    <n-radio-button value="H">H</n-radio-button>
                </n-radio-group>
            </n-form-item>

            <n-form-item
                :label="$t('utilities.qrcode:config.iconBackgroundColor')"
                :show-feedback="false"
                class="min-w-60"
            >
                <n-color-picker v-model:value="config.iconBackgroundColor" default-value="#FFF" />
            </n-form-item>

            <n-form-item
                :label="$t('utilities.qrcode:config.iconBorderRadius')"
                :show-feedback="false"
            >
                <n-input-number v-model:value="config.iconBorderRadius" :min="0" :step="1" />
            </n-form-item>

            <n-form-item :label="$t('utilities.qrcode:config.iconSize')" :show-feedback="false">
                <n-input-number v-model:value="config.iconSize" :min="0" :step="1" />
            </n-form-item>

            <n-form-item :label="$t('utilities.qrcode:config.iconSrc')" :show-feedback="false">
                <n-input v-model:value="config.iconSrc" />
            </n-form-item>

            <n-form-item :label="$t('utilities.qrcode:config.padding')" :show-feedback="false">
                <n-input-number v-model:value="config.padding as number" :min="0" :step="1" />
            </n-form-item>

            <n-form-item :label="$t('utilities.qrcode:config.size')" :show-feedback="false">
                <n-input-number v-model:value="config.size" :min="0" :step="1" />
            </n-form-item>

            <n-form-item :label="$t('utilities.qrcode:config.type')" :show-feedback="false">
                <n-radio-group v-model:value="config.type" size="small">
                    <n-radio-button value="canvas">Canvas</n-radio-button>
                    <n-radio-button value="svg">SVG</n-radio-button>
                </n-radio-group>
            </n-form-item>
        </n-flex>

        <n-divider class="!my-0" />

        <n-flex justify="space-evenly" size="small">
            <n-button @click="applyPreset('default')">
                {{ $t("utilities.qrcode:presets.default") }}
            </n-button>
        </n-flex>
    </n-flex>
</template>