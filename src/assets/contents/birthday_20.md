```vue template

<custom-naive-vertical-stack>
  <iframe class='w-full border-none' src='https://music.163.com/outchain/player?type=2&id=3371800898&auto=0'/>

  <n-card size="small" title="贺图">
    <custom-naive-vertical-stack align="center">
      <n-image :src="publicAssets.find('@/assets/public/images/birthday/records/20/manuscript_1.webp').value"/>

      <n-text type="primary">好萌 超级喜欢</n-text>
      <n-text depth="3">[ @ wonold ]</n-text>
    </custom-naive-vertical-stack>
  </n-card>

  <n-card size="small" title="祝福">
    <custom-naive-vertical-stack align="center">
      <n-text class='text-6'>感谢所有人的祝贺ww~</n-text>
      <n-image :src="publicAssets.find('@/assets/public/images/birthday/records/20/congratulate_1.webp').value"/>
    </custom-naive-vertical-stack>
  </n-card>
</custom-naive-vertical-stack>

```