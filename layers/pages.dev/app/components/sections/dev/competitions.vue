<script lang="ts" setup>
    import competitionsConfig from "#layers/pages.dev/config/competitions";
    import { isNonNullish } from "remeda";

    const { isMobile } = useResponsive();
    const message = useMessage();
    const i18n = useI18n();

    const { define: CompetitionButtonDefine, reuse: CompetitionButton } = createReusableTemplate<{
        readonly name: string;
    }>();

    const handleEmptyClick = () => {
        message.info(i18n.t("pages.dev:competitions:no_trace_link"));
    };
</script>

<template>
    <CompetitionButtonDefine v-slot="{ name }">
        <n-button :block="isMobile" class="flex-1 h-full p-4" size="small">
            <n-element
                :class="[
                    'whitespace-pre leading-tight',
                    { 'text-wrap': isMobile },
                    { 'text-nowrap': !isMobile },
                ]"
            >
                {{ guessLocale(name) }}
            </n-element>
        </n-button>
    </CompetitionButtonDefine>

    <n-flex :vertical="isMobile" size="small">
        <template v-for="{ name, href } in competitionsConfig">
            <template v-if="isNonNullish(href)">
                <naive-redirector-wrapper #="{ href, redirect }" :href="href">
                    <CompetitionButton :href="href" :name="name" tag="a" @click.prevent="redirect">
                        <n-element
                            :class="[
                                'whitespace-pre leading-tight',
                                { 'text-wrap': isMobile },
                                { 'text-nowrap': !isMobile },
                            ]"
                        >
                            {{ guessLocale(name) }}
                        </n-element>
                    </CompetitionButton>
                </naive-redirector-wrapper>
            </template>

            <template v-else>
                <CompetitionButton :name="name" secondary @click="handleEmptyClick">
                    <n-element
                        :class="[
                            'whitespace-pre leading-tight',
                            { 'text-wrap': isMobile },
                            { 'text-nowrap': !isMobile },
                        ]"
                    >
                        {{ guessLocale(name) }}
                    </n-element>
                </CompetitionButton>
            </template>
        </template>
    </n-flex>
</template>