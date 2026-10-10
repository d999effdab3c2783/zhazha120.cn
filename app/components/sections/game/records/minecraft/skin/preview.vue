<script lang="ts" setup>
	import { useElementSize } from '@vueuse/core'
	import { isNil, isNotNil, merge } from 'es-toolkit'
	import type { SelectOption } from 'naive-ui'
	import type { ModelType } from 'skinview-utils'
	import {
		CrouchAnimation,
		type EarsLoadOptions,
		FlyingAnimation,
		HitAnimation,
		IdleAnimation,
		RunningAnimation,
		SkinViewer,
		WalkingAnimation,
		WaveAnimation
	} from 'skinview3d'
	import { onScopeDispose, reactive, shallowRef, useTemplateRef, watch } from 'vue'

	import { useResponsive } from '~/composables/responsive'
	import { useGameStore } from '~/stores/game'

	const gameStore = useGameStore()

	const config = reactive<
		Partial<{
			fov: number
			zoom: number
			global_lighting: number
			camera_lighting: number
			auto_rotate: boolean
			auto_rotate_speed: number
			animation_type: string
			animation_speed: number
			visible: Record<string, boolean>
			skin_url: string
			skin_model: ModelType | 'auto-detect'
			cape_url: string
			back_equipment_type: 'cape' | 'elytra'
			ears_url: string
			ears_type: EarsLoadOptions['textureType'] | 'current_skin' | 'none'
			background: string
			background_type: 'solid' | 'panorama'
			name_tag: string
		}>
	>(
		merge(
			{
				fov: 96,
				zoom: 0.8,
				global_lighting: 3,
				camera_lighting: 0.6,
				auto_rotate: false,
				auto_rotate_speed: 1,
				animation_type: 'idle',
				animation_speed: 1,
				visible: {},
				background: '#000000',
				background_type: 'solid',
				name_tag: 'Player'
			},
			gameStore.records.minecraft.defaultPreviewConfig
		)
	)

	const viewer = shallowRef<SkinViewer>()

	const { isMobile } = useResponsive()

	const canvasRef = useTemplateRef('canvasRef')
	const canvasSize = useElementSize(canvasRef)

	const animationTypes = [
		{
			label: '无',
			value: 'none'
		},
		{
			label: '待机',
			value: 'idle'
		},
		{
			label: '走',
			value: 'walk'
		},
		{
			label: '跑',
			value: 'run'
		},
		{
			label: '飞',
			value: 'fly'
		},
		{
			label: '挥手',
			value: 'wave'
		},
		{
			label: '蹲',
			value: 'crouch'
		},
		{
			label: '打',
			value: 'hit'
		}
	] as const satisfies SelectOption[]

	const skinModels = [
		{
			label: '自动检测',
			value: 'auto-detect'
		},
		{
			label: '默认',
			value: 'default'
		},
		{
			label: '瘦',
			value: 'slim'
		}
	] as const satisfies SelectOption[]

	const visibleLayers = [
		{
			label: '内层',
			value: 'innerLayer'
		},
		{
			label: '外层',
			value: 'outerLayer'
		}
	] as const

	const visibleParts = [
		{
			label: '头',
			value: 'head'
		},
		{
			label: '身体',
			value: 'body'
		},
		{
			label: '左臂',
			value: 'leftArm'
		},
		{
			label: '右臂',
			value: 'rightArm'
		},
		{
			label: '左腿',
			value: 'leftLeg'
		},
		{
			label: '右腿',
			value: 'rightLeg'
		}
	] as const

	const backEquipmentTypes = [
		{
			label: '无',
			value: 'none'
		},
		{
			label: '披风',
			value: 'cape'
		},
		{
			label: '鞘翅',
			value: 'elytra'
		}
	] as const satisfies SelectOption[]

	const earTypes = [
		{
			label: '无',
			value: 'none'
		},
		{
			label: '与当前皮肤相同',
			value: 'current_skin'
		},
		{
			label: '独立',
			value: 'standalone'
		},
		{
			label: '皮肤',
			value: 'skin'
		}
	] as const satisfies SelectOption[]

	const backgroundTypes = [
		{
			label: '无',
			value: 'none'
		},
		{
			label: '纯色',
			value: 'solid'
		},
		{
			label: '全景',
			value: 'panorama'
		}
	] as const satisfies SelectOption[]

	watch(
		[viewer, () => config],
		([newViewer, newConfig]) => {
			if (isNil(newViewer)) {
				return
			}

			if (isNotNil(newConfig.fov)) {
				newViewer.fov = newConfig.fov
			}

			if (isNotNil(newConfig.zoom)) {
				newViewer.zoom = newConfig.zoom
			}

			if (isNotNil(newConfig.global_lighting)) {
				newViewer.globalLight.intensity = newConfig.global_lighting
			}

			if (isNotNil(newConfig.camera_lighting)) {
				newViewer.cameraLight.intensity = newConfig.camera_lighting
			}

			if (isNotNil(newConfig.auto_rotate)) {
				newViewer.autoRotate = newConfig.auto_rotate
			}

			if (isNotNil(newConfig.auto_rotate_speed)) {
				newViewer.autoRotateSpeed = newConfig.auto_rotate_speed
			}

			switch (newConfig.animation_type) {
				case 'idle':
					newViewer.animation = new IdleAnimation()
					break
				case 'walk':
					newViewer.animation = new WalkingAnimation()
					break
				case 'run':
					newViewer.animation = new RunningAnimation()
					break
				case 'fly':
					newViewer.animation = new FlyingAnimation()
					break
				case 'wave':
					newViewer.animation = new WaveAnimation()
					break
				case 'crouch':
					newViewer.animation = new CrouchAnimation()
					break
				case 'hit':
					newViewer.animation = new HitAnimation()
					break
				default:
					newViewer.animation = null
			}

			if (isNotNil(newViewer.animation) && isNotNil(newConfig.animation_speed)) {
				newViewer.animation!.speed = newConfig.animation_speed
			}

			if (isNotNil(newConfig.visible)) {
				Object.entries(newConfig.visible).forEach(async ([key, state]) => {
					if (isNotNil(newViewer)) {
						const [layer, part] = key.split('.', 2)

						if (isNil(layer) || isNil(part)) {
							return
						}

						// @ts-ignore
						newViewer.playerObject.skin[part][layer].visible = state
					}
				})
			}

			if (isNotNil(newConfig.skin_url) && newConfig.skin_url.length > 0) {
				newViewer.loadSkin(newConfig.skin_url, {
					model: newConfig.skin_model,
					ears: newConfig.ears_type === 'current_skin'
				})
			}

			if (isNotNil(newConfig.cape_url) && newConfig.cape_url.length > 0) {
				newViewer.loadCape(newConfig.cape_url, {
					backEquipment: newConfig.back_equipment_type
				})
			}

			switch (newConfig.ears_type) {
				case 'standalone':
				case 'skin':
					if (isNotNil(newConfig.ears_url) && newConfig.ears_url.length > 0) {
						newViewer.loadEars(newConfig.ears_url, {
							textureType: newConfig.ears_type
						})
					}
					break
				case 'none':
					newViewer.loadEars(null)
					break
			}

			switch (newConfig.background_type) {
				case 'solid':
					if (isNotNil(newConfig.background) && newConfig.background.length > 0) {
						newViewer.background = newConfig.background
					}
					break
				case 'panorama':
					if (isNotNil(newConfig.background) && newConfig.background.length > 0) {
						newViewer.loadPanorama(newConfig.background)
					}
					break
				default:
					newViewer.background = null
			}

			if (isNotNil(newConfig.name_tag) && newConfig.name_tag.length > 0) {
				newViewer.nameTag = newConfig.name_tag
			}
		},
		{
			immediate: true,
			deep: true
		}
	)

	watch(
		[canvasRef, canvasSize.width, canvasSize.height],
		([newCanvasRef, newCanvasWidth, newCanvasHeight]) => {
			if (isNil(newCanvasRef) || newCanvasWidth <= 0 || newCanvasHeight <= 0) {
				return
			}

			const newViewer = new SkinViewer({
				canvas: newCanvasRef
			})

			newViewer.width = newCanvasWidth
			newViewer.height = newCanvasHeight

			newViewer.controls.enableRotate = true
			newViewer.controls.enableZoom = true
			newViewer.controls.enablePan = true

			onScopeDispose(() => {
				newViewer.dispose()
			})

			viewer.value = newViewer
		},
		{
			immediate: true
		}
	)
</script>

<template>
	<n-card
		size="small"
		title="皮肤"
	>
		<n-flex
			size="small"
			vertical
		>
			<canvas
				ref="canvasRef"
				class="h-120 w-full"
				data-lenis-prevent
			/>

			<n-divider />

			<n-flex
				justify="space-evenly"
				size="large"
				:vertical="isMobile"
			>
				<n-form-item label="视野 (FOV)">
					<n-input-number v-model:value="config.fov" />
				</n-form-item>

				<n-form-item label="缩放">
					<n-input-number v-model:value="config.zoom" />
				</n-form-item>

				<n-form-item label="全局光照强度">
					<n-input-number v-model:value="config.global_lighting" />
				</n-form-item>

				<n-form-item label="摄像机光照强度">
					<n-input-number v-model:value="config.camera_lighting" />
				</n-form-item>

				<n-form-item label="自动旋转">
					<n-switch v-model:value="config.auto_rotate" />
				</n-form-item>

				<n-form-item label="自动旋转速度">
					<n-input-number v-model:value="config.auto_rotate_speed" />
				</n-form-item>

				<n-form-item
					class="min-w-60"
					label="动画类型"
				>
					<n-select
						v-model:value="config.animation_type"
						:options="animationTypes"
					/>
				</n-form-item>

				<n-form-item label="动画速度">
					<n-input-number v-model:value="config.animation_speed" />
				</n-form-item>

				<n-form-item label="可见区域">
					<n-scrollbar
						class="overscroll-contain"
						data-lenis-prevent-horizontal
						x-scrollable
					>
						<n-table>
							<thead>
								<tr>
									<th />

									<template
										v-for="(part, index) in visibleParts"
										:key="index"
									>
										<th>{{ part.label }}</th>
									</template>
								</tr>
							</thead>

							<tbody>
								<tr
									v-for="(layer, index) in visibleLayers"
									:key="index"
								>
									<td>{{ layer.label }}</td>

									<template
										v-for="(part, partIndex) in visibleParts"
										:key="partIndex"
									>
										<td>
											<n-switch
												v-model:value="config.visible![`${layer.value}.${part.value}`]"
												:default-value="true"
											/>
										</td>
									</template>
								</tr>
							</tbody>
						</n-table>
					</n-scrollbar>
				</n-form-item>

				<n-form-item label="皮肤地址">
					<n-input v-model:value="config.skin_url" />
				</n-form-item>

				<n-form-item
					class="min-w-60"
					label="皮肤模型"
				>
					<n-select
						v-model:value="config.skin_model"
						:options="skinModels"
					/>
				</n-form-item>

				<n-form-item label="披风地址">
					<n-input v-model:value="config.cape_url" />
				</n-form-item>

				<n-form-item
					class="min-w-60"
					label="背部装备类型"
				>
					<n-select
						v-model:value="config.back_equipment_type"
						:options="backEquipmentTypes"
					/>
				</n-form-item>

				<n-form-item label="耳朵地址">
					<n-input v-model:value="config.ears_url" />
				</n-form-item>

				<n-form-item
					class="min-w-60"
					label="耳朵类型"
				>
					<n-select
						v-model:value="config.ears_type"
						:options="earTypes"
					/>
				</n-form-item>

				<n-form-item
					class="min-w-60"
					label="背景"
				>
					<template v-if="config.background_type === 'solid'">
						<n-color-picker v-model:value="config.background" />
					</template>

					<template v-if="config.background_type === 'panorama'">
						<n-input v-model:value="config.background" />
					</template>
				</n-form-item>

				<n-form-item
					class="min-w-60"
					label="背景类型"
				>
					<n-select
						v-model:value="config.background_type"
						:options="backgroundTypes"
					/>
				</n-form-item>

				<n-form-item label="姓名牌">
					<n-input v-model:value="config.name_tag" />
				</n-form-item>
			</n-flex>
		</n-flex>
	</n-card>
</template>