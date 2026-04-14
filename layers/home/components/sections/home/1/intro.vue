<script lang="ts" setup>
    const appConfig = useAppConfig();
    const message = useMessage();

    const handlePoke = () => {
        message.create(appConfig.global.avatar.poke);
    };
</script>

<template>
    <n-flex align="center" size="small" justify="center">
        <n-avatar
            :src="appConfig.global.avatar.src"
            circle
            class="size-30 transition-(transform ease-in-out duration-500) hover:(cursor-pointer rotate-360)"
            @dblclick="handlePoke"
        />

        <n-text
            class="font-[v-zhazha120-script] fw-extrabold text-15 transition-(text-shadow ease-in-out duration-500) text-shadow-[0_0_0] hover:text-shadow-[0_0_.2em]"
        >
            {{ appConfig.global.name }}
        </n-text>
    </n-flex>
</template>