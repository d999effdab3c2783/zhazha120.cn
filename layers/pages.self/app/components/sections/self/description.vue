<script lang="ts" setup>
    const { isMobile } = useResponsive();
</script>

<template>
    <n-flex size="small" vertical>
        <n-card size="small">
            <n-flex :size="0" vertical>
                <n-text
                    >不太活泼 足够无聊 对大多数事情没有太多反应 不太会说话 不太会聊天
                    不太会表达自己</n-text
                >

                <n-text class="text-(black opacity-0)">
                    笨笨的, 在部分情况下可能会需要更多的思考和时间, 不要嫌弃我...
                </n-text>

                <n-text depth="3">可以扩列 但不建议</n-text>
                <n-text depth="3">不擅长聊天 对于无聊的事情不会回复太多 很多时候是敷衍回答</n-text>
                <n-text depth="3">可以加 可以躺列 可以提问 但不保证一定有解决方案</n-text>
            </n-flex>
        </n-card>

        <n-element class="opacity-50">
            <n-alert :bordered="false" type="warning">
                <n-flex :size="0" vertical>
                    <n-text
                        >本体默认隐藏 你可以偷偷查 但不要直接跑来问我和本体有关的任何问题
                        不会理你也不会回答</n-text
                    >
                    <n-text>也不要拿着本就公开的信息跳我脸上 很无聊</n-text>
                </n-flex>
            </n-alert>
        </n-element>

        <n-flex :vertical="isMobile" size="small">
            <n-element class="flex-1 opacity-50">
                <n-alert :bordered="false" type="error">
                    <n-flex :size="0" vertical>
                        <n-text>不会涩涩 不约 不是同 不谈恋爱 不找对象 不当对象</n-text>
                        <n-text>不抽烟 不酗酒 不会打麻将</n-text>
                    </n-flex>
                </n-alert>
            </n-element>

            <n-element class="flex-1 opacity-50">
                <n-alert :bordered="false" type="success">
                    <n-flex :size="0" vertical>
                        <n-text>只剩自己</n-text>
                        <n-text>爱喝奶茶 并尤其喜欢古茗 (?)</n-text>
                    </n-flex>
                </n-alert>
            </n-element>
        </n-flex>
    </n-flex>
</template>