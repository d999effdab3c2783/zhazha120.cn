<script lang="ts" setup>
    import CustomNaiveAutoStack from "@/components/custom/naive/auto-stack.vue";
    import CustomNaivePosition from "@/components/custom/naive/position.vue";
    import { useZodRegistry } from "@/composables/database";
    import type { MotionVariants } from "@vueuse/motion";
    import { NAvatar, NElement, NText, useMessage } from "naive-ui";
    import { isNonNullish, isNullish } from "remeda";
    import { z } from "zod";

    defineOptions({
        name: "SectionsHomeIntro",
    });

    const {
        0: avatar,
        1: name,
        2: poke,
    } = useZodRegistry(
        z.object({
            "intro.avatar:0": z.string().describe("file"),
            "intro.name:1": z.string(),
            "intro.poke:2": z.string(),
        }),
    );

    const message = useMessage();

    const motions = {
        avatar: {
            initial: {
                scale: 0,
                rotate: 0,
            },
            visible: {
                scale: 1,
                rotate: 0,

                transition: {
                    type: "spring",
                    delay: 100,
                    duration: 500,
                },
            },
            hovered: {
                rotate: 360,

                transition: {
                    type: "spring",
                    duration: 1000,
                },
            },
        } satisfies MotionVariants<string>,

        name: {
            initial: {
                opacity: 0,
            },
            visible: {
                opacity: 1,

                transition: {
                    type: "spring",
                    delay: 300,
                    duration: 500,
                },
            },
        } satisfies MotionVariants<string>,
    } as const;

    const handlePoke = async () => {
        if (isNullish(poke.value)) {
            return;
        }

        message.create(poke.value);
    };
</script>

<template>
    <custom-naive-position class="h-full" placement="center">
        <custom-naive-auto-stack align="center">
            <template v-if="isNonNullish(avatar)">
                <n-avatar
                    v-motion="motions.avatar"
                    :src="avatar"
                    class="size-30"
                    round
                    @dblclick="handlePoke"
                />
            </template>

            <template v-if="isNonNullish(name)">
                <n-element
                    class="transition-([text-shadow] duration-500 ease-in-out) hover:text-shadow-[0_0_.5em]"
                >
                    <n-text v-motion="motions.name" class="text-15 fw-extrabold">{{ name }}</n-text>
                </n-element>
            </template>
        </custom-naive-auto-stack>
    </custom-naive-position>
</template>