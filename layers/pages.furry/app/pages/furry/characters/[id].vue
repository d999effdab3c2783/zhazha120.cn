<script lang="ts" setup>
    import { isNonNullish, isString } from "remeda";

    definePageMeta({
        layout: "subpage",
        validate: (route) => isString(route.params.id) && /^\d+$/.test(route.params.id),
        title: {
            localeKey: "pages.furry:characters:profile.name",
        },
    });

    const furryStore = useFurryStore();
    const route = useRoute();
    const i18n = useI18n();
    const { isMobile } = useResponsive();

    const character = furryStore.characters.find(({ id }) => String(id) === route.params.id);

    if (isNonNullish(character)) {
        useSeoMeta({
            title: guessLocale(character.name),
            description: guessLocale(character.description),

            ogTitle: guessLocale(character.name),
            ogDescription: guessLocale(character.description),
            ogImage: character.illustration.src,
        });
    }
</script>

<template>
    <n-flex size="small" vertical>
        <template v-if="isNonNullish(character)">
            <n-card size="small">
                <n-flex :justify="isMobile ? 'center' : undefined" :wrap="isMobile" size="small">
                    <n-image :src="character.illustration.src" class="h-120" object-fit="contain" />

                    <n-flex :align="isMobile ? 'center' : undefined" size="small" vertical>
                        <n-flex :size="0" align="center">
                            <n-h2 class="fw-extrabold !my-0">
                                {{ guessLocale(character.name) }}
                            </n-h2>

                            <template v-if="isNonNullish(character.species_alias)">
                                <n-divider vertical />
                                <n-text type="info">
                                    {{ guessLocale(character.species_alias) }}
                                </n-text>
                            </template>
                        </n-flex>

                        <n-flex align="center" size="small">
                            <template v-for="{ name, percent } in character.species">
                                <n-tag size="small">
                                    {{ percent.toFixed(2) }}%
                                    {{ guessLocale(name) }}
                                </n-tag>
                            </template>
                        </n-flex>

                        <n-h4 class="!mb-0" prefix="bar">
                            {{ guessLocale(character.description) }}
                        </n-h4>
                    </n-flex>
                </n-flex>

                <template #action>
                    <n-flex :justify="isMobile ? 'center' : 'end'" size="small">
                        <i18n-t keypath="pages.furry:characters:profile.owner">
                            <template #owner>
                                <template v-if="isNonNullish(character.owner.href)">
                                    <naive-redirector-wrapper
                                        #="{ href, redirect }"
                                        :href="character.owner.href"
                                    >
                                        <n-button
                                            :href="href"
                                            size="small"
                                            tag="a"
                                            text
                                            type="primary"
                                            @click.prevent="redirect"
                                        >
                                            {{ guessLocale(character.owner.name) }}
                                        </n-button>
                                    </naive-redirector-wrapper>
                                </template>

                                <template v-else>
                                    <n-text type="info">
                                        {{ guessLocale(character.owner.name) }}
                                    </n-text>
                                </template>
                            </template>
                        </i18n-t>
                    </n-flex>
                </template>
            </n-card>

            <Component :is="character.renderExtra()" />
        </template>

        <template v-else>
            <n-card size="small">
                <n-result
                    :description="
                        $t('pages.furry:characters:profile.no_result.description', {
                            id: route.params.id,
                        })
                    "
                    :title="$t('pages.furry:characters:profile.no_result.title')"
                    status="error"
                />
            </n-card>
        </template>
    </n-flex>
</template>