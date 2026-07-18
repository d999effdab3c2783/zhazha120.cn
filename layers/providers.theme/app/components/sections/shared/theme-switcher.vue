<script lang="ts" setup>
    const themeStore = useThemeStore();

    const { define: ThemeSwitcherButtonDefine, reuse: ThemeSwitcherButton } =
        createReusableTemplate<
            {
                readonly value: typeof themeStore.mode;
            },
            {
                readonly icon: {};
                readonly default: {};
            }
        >();
</script>

<template>
    <ThemeSwitcherButtonDefine #="{ value, $slots }">
        <n-button
            :type="themeStore.mode === value ? 'primary' : 'default'"
            secondary
            @click="themeStore.mode = value"
        >
            <template #icon>
                <Component :is="$slots.icon" />
            </template>

            <Component :is="$slots.default" />
        </n-button>
    </ThemeSwitcherButtonDefine>

    <n-button-group size="small">
        <ThemeSwitcherButton value="light">
            <template #icon>
                <n-icon class="i-tabler:sun" />
            </template>

            浅色
        </ThemeSwitcherButton>

        <ThemeSwitcherButton value="system">
            <template #icon>
                <n-icon class="i-tabler:sun-moon" />
            </template>

            跟随系统
        </ThemeSwitcherButton>

        <ThemeSwitcherButton value="dark">
            <template #icon>
                <n-icon class="i-tabler:moon" />
            </template>

            深色
        </ThemeSwitcherButton>
    </n-button-group>
</template>