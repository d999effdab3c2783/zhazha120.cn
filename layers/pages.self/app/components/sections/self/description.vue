<script lang="ts" setup>
    const { isMobile } = useResponsive();
</script>

<template>
    <n-flex size="small" vertical>
        <n-alert :show-icon="false">
            <n-flex :size="0" vertical>
                <n-text>
                    不太活泼 足够无聊 对大多数事情没有太多反应 不太会说话 不太会聊天 不太会表达自己
                </n-text>

                <n-text class="text-(black opacity-0)">
                    笨笨的 在部分情况下可能会需要更多的思考和时间 不要嫌弃我...
                </n-text>

                <n-text :depth="3">可以扩列 但不建议</n-text>

                <n-text :depth="3">
                    热门游戏全都不玩 不要找我 很多时候没空 不去组队也不想语音
                </n-text>

                <n-text :depth="3">
                    也不擅长聊天 对于无聊的事情不会回复太多 很多时候是敷衍回答
                </n-text>

                <n-text :depth="3">可以加 可以躺列 可以提问 但不保证一定有解决方案</n-text>
            </n-flex>
        </n-alert>

        <n-flex :vertical="isMobile" size="small">
            <n-alert class="flex-1" type="info">
                <n-flex :size="0" vertical>
                    <n-text>也许没有雷点 也没啥情绪波动 单删也可恢复</n-text>

                    <n-text>
                        但也不想闲聊 以及莫名其妙的 戳一戳/发个表情 但什么都不说
                        或者早晚安问候之类的 很无聊
                    </n-text>

                    <n-text>
                        如果打扰到我做什么事了 可能会被我骂 但也并不是真的生气 试试换个时间再发
                    </n-text>
                </n-flex>
            </n-alert>

            <n-alert class="flex-1" type="warning">
                <n-flex :size="0" vertical>
                    <n-text>本体默认隐藏 你可以偷偷查</n-text>
                    <n-text>但不要直接跑来问我和本体有关的任何问题 不会理你也不会回答</n-text>
                    <n-text>也不要拿着本就公开的信息跳我脸上 很无聊</n-text>
                </n-flex>
            </n-alert>
        </n-flex>

        <n-alert class="bg-purple-900/50">
            <template #icon>
                <n-icon class="text-purple-200 i-ant-design:question-circle-filled" />
            </template>

            <n-flex :size="0" vertical>
                <n-text :depth="3">
                    有例外 包括但不限于熟人等 但无法预测 偶尔不想理人时以上内容依旧适用
                </n-text>
            </n-flex>
        </n-alert>

        <n-flex :vertical="isMobile" size="small">
            <n-alert class="flex-1" type="error">
                <n-flex :size="0" vertical>
                    <n-text>不会涩涩 不约 不是同 不谈恋爱 不找对象 不当对象</n-text>
                    <n-text>不抽烟 不酗酒 不会打麻将</n-text>
                </n-flex>
            </n-alert>

            <n-alert class="flex-1" type="success">
                <n-flex :size="0" vertical>
                    <n-text>只剩自己</n-text>
                    <n-text>爱喝奶茶 并尤其喜欢古茗 (?)</n-text>
                </n-flex>
            </n-alert>
        </n-flex>
    </n-flex>
</template>