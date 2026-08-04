<script lang="ts" setup>
    import { isNonNullish, isString } from "remeda";

    definePageMeta({
        layout: "subpage",
        validate: (route) => isString(route.params.id) && /^\d+$/.test(route.params.id),
        title: "档案",
    });

    const furryStore = useFurryStore();
    const route = useRoute();
    const { isMobile } = useResponsive();

    const character = furryStore.characters.find(
        (character) => String(character.id) === route.params.id,
    );

    if (isNonNullish(character)) {
        useSeoMeta({
            title: character.name,
            description: character.description,

            ogTitle: character.name,
            ogDescription: character.description,
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
                            <n-h2 class="fw-extrabold !my-0">{{ character.name }}</n-h2>

                            <template v-if="isNonNullish(character.species_alias)">
                                <n-divider vertical />
                                <n-text type="info">{{ character.species_alias }}</n-text>
                            </template>
                        </n-flex>

                        <n-flex align="center" size="small">
                            <template v-for="species in character.species">
                                <n-tag size="small">
                                    {{ species.percent.toFixed(2) }}%
                                    {{ species.name }}
                                </n-tag>
                            </template>
                        </n-flex>

                        <n-h4 class="!mb-0" prefix="bar">{{ character.description }}</n-h4>
                    </n-flex>
                </n-flex>

                <template #action>
                    <n-flex :justify="isMobile ? 'center' : 'end'" size="small">
                        <n-text>所有者: </n-text>

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
                                    {{ character.owner.name }}
                                </n-button>
                            </naive-redirector-wrapper>
                        </template>

                        <template v-else>
                            <n-text type="info">{{ character.owner.name }}</n-text>
                        </template>
                    </n-flex>
                </template>
            </n-card>

            <Component :is="character.renderExtra()" />
        </template>

        <template v-else>
            <n-card size="small">
                <n-result
                    :description="`也许是 ID 为 ${route.params.id} 的设定其实并不存在`"
                    status="error"
                    title="空结果"
                />
            </n-card>
        </template>
    </n-flex>
</template>