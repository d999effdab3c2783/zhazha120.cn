<script lang="ts" setup>
    import { isNonNullish } from "remeda";

    const appConfig = useAppConfig();
    const message = useMessage();

    const poke = guessLocale(appConfig.self.avatar.poke);

    const handlePoke = () => {
        if (isNonNullish(poke)) {
            message.create(poke);
        }
    };
</script>

<template>
    <n-flex align="center" justify="center" size="small">
        <n-avatar
            :src="appConfig.self.avatar.src"
            circle
            class="size-30 transition-(transform ease-in-out duration-500) hover:(cursor-pointer rotate-360)"
            @dblclick="handlePoke"
        />

        <n-text
            class="font-[v-zhazha120-script] fw-extrabold text-15 transition-(text-shadow ease-in-out duration-500) text-shadow-[0_0_0] hover:text-shadow-[0_0_.2em]"
        >
            {{ guessLocale(appConfig.self.name) }}
        </n-text>
    </n-flex>
</template>