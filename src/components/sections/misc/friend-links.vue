<script lang="ts" setup>
	import { isNonNullish } from 'remeda'

	const friendLinks = await useFriendLinks()

	const processUrl = (href: string) => {
		return href.replace('{domain}', location.host)
	}

	const extractHost = (href: string) => {
		try {
			const processedHref = processUrl(href)
			const url = new URL(processedHref)

			return url.host
		} catch {}
	}
</script>

<template>
	<n-list>
		<template v-for="{ status, logo, name, description, href } in friendLinks">
			<n-list-item>
				<custom-naive-ui-list-thing>
					<template #prefix>
						<n-image
							:img-props="{
								class: 'min-w-20 max-h-20'
							}"
							:src="logo"
							class="rounded"
						/>
					</template>

					<custom-naive-ui-vertical-stack>
						<custom-naive-ui-redirect-button
							:class="[
								'size-fit',
								{
									'opacity-50': status === 'dead'
								}
							]"
							:href="processUrl(href)"
							:rel="status === 'dead' ? ['nofollow'] : []"
							tag="a"
							text
							type="primary"
						>
							<custom-naive-ui-text-stack>
								<n-text class="text-current fw-bold">
									{{ name }}
								</n-text>
							</custom-naive-ui-text-stack>

							<template v-if="status === 'dead'" #extra>
								<n-alert class="w-full" type="error">可能已经 忘记续费/关站</n-alert>
							</template>
						</custom-naive-ui-redirect-button>

						<template v-if="isNonNullish(description)">
							<n-text :depth="3">
								{{ description }}
							</n-text>
						</template>
					</custom-naive-ui-vertical-stack>

					<template #suffix>
						<n-text :depth="3" class="text-[.8em]">
							{{ extractHost(href) }}
						</n-text>
					</template>
				</custom-naive-ui-list-thing>
			</n-list-item>
		</template>
	</n-list>
</template>