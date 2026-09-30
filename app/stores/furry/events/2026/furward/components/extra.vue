<script setup lang="ts">
	const photos = await Promise.all(
		Object.values(
			import.meta.glob<string>('../assets/photos/*.webp', {
				query: '?url',
				import: 'default'
			})
		).map(async loader => {
			return await loader()
		})
	)
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<n-card
			size="small"
			title="了解更多"
		>
			<n-element class="utils__center--grid">
				<n-flex
					align="center"
					size="small"
					vertical
				>
					<n-qr-code
						class="box-content"
						:size="120"
						value="https://h5.qzone.qq.com/ugc/share?res_uin=2331281251&appid=311&cellid=6387f48a71750e6a6d100500"
					/>

					<n-text>QQ 空间动态</n-text>
					<n-text :depth="3">[仅好友可见]</n-text>
				</n-flex>
			</n-element>
		</n-card>

		<n-card
			size="small"
			title="精选返图"
		>
			<n-image-group>
				<template
					v-for="(url, index) in photos"
					:key="index"
				>
					<n-image :src="url" />
				</template>
			</n-image-group>
		</n-card>
	</n-flex>
</template>

<style scoped lang="scss">
	@use '~/styles/utils';
</style>