<script lang="ts" setup>
	const images = await Promise.all(
		Object.values(
			import.meta.glob<string>('../assets/photos/*.bin', {
				query: '?url',
				import: 'default',
			}),
		).map(async (loader) => {
			return loader();
		}),
	);
</script>

<template>
	<custom-naive-ui-vertical-stack>
		<n-card size="small" title="了解更多">
			<custom-naive-ui-position cover placement="center">
				<custom-naive-ui-vertical-stack align="center">
					<n-qr-code
						class="box-content"
						value="https://h5.qzone.qq.com/ugc/share?res_uin=2331281251&appid=311&cellid=6387f48a71750e6a6d100500"
					/>

					<n-text>QQ 空间动态</n-text>
					<n-text :depth="3">[仅好友可见]</n-text>
				</custom-naive-ui-vertical-stack>
			</custom-naive-ui-position>
		</n-card>

		<n-card size="small" title="精选返图">
			<n-image-group>
				<template v-for="url in images">
					<n-image :src="url" />
				</template>
			</n-image-group>
		</n-card>
	</custom-naive-ui-vertical-stack>
</template>