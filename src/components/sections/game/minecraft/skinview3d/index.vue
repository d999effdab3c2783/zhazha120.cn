<script lang="ts" setup>
    import CustomNaiveAutoStack from "@/components/custom/naive/auto-stack.vue";
    import CustomNaivePosition from "@/components/custom/naive/position.vue";
    import CustomNaiveVerticalStack from "@/components/custom/naive/vertical-stack.vue";
    import SectionsGameMinecraftSkinview3dVisibleSwitch from "@/components/sections/game/minecraft/skinview3d/visible-switch.vue";
    import { useZodRegistry } from "@/composables/database";
    import { XNSelect, XNSelectOption } from "@skit/x.naive-ui";
    import { useElementSize } from "@vueuse/core";
    import {
        NCard,
        NColorPicker,
        NDivider,
        NFormItem,
        NInput,
        NInputNumber,
        NSwitch,
    } from "naive-ui";
    import { isEmptyish, isNonNullish, isNullish } from "remeda";
    import type { ModelType } from "skinview-utils";
    import {
        CrouchAnimation,
        type EarsLoadOptions,
        FlyingAnimation,
        HitAnimation,
        IdleAnimation,
        RunningAnimation,
        SkinViewer,
        WalkingAnimation,
        WaveAnimation,
    } from "skinview3d";
    import { onMounted, ref, shallowRef, useTemplateRef, watch } from "vue";
    import { z } from "zod";

    defineOptions({
        name: "SectionsGameMinecraftSkinview3d",
    });

    const {
        0: fov,
        1: zoom,
        2: global_lighting,
        3: camera_lighting,
        4: auto_rotate,
        5: auto_rotate_speed,
        6: animation_type,
        7: animation_speed,
        8: skin,
        9: panorama,
        10: name_tag,
    } = useZodRegistry(
        z.object({
            "game.records.minecraft.skinview3d.fov:0": z.number(),
            "game.records.minecraft.skinview3d.zoom:1": z.number(),
            "game.records.minecraft.skinview3d.global_lighting:2": z.number(),
            "game.records.minecraft.skinview3d.camera_lighting:3": z.number(),
            "game.records.minecraft.skinview3d.auto_rotate:4": z.boolean(),
            "game.records.minecraft.skinview3d.auto_rotate_speed:5": z.number(),
            "game.records.minecraft.skinview3d.animation_type:6": z.string(),
            "game.records.minecraft.skinview3d.animation_speed:7": z.number(),
            "game.records.minecraft.skinview3d.skin:8": z.string().describe("file"),
            "game.records.minecraft.skinview3d.panorama:9": z.string().describe("file"),
            "game.records.minecraft.skinview3d.name_tag:10": z.string(),
        }),
    );

    const canvasRef = useTemplateRef<HTMLCanvasElement>("canvasRef");
    const canvasSize = useElementSize(canvasRef);

    const config = ref<
        Partial<{
            fov: number;
            zoom: number;
            global_lighting: number;
            camera_lighting: number;
            auto_rotate: boolean;
            auto_rotate_speed: number;
            animation_type: string;
            animation_speed: number;
            visible: Record<string, boolean>;
            skin_url: string;
            skin_model: ModelType | "auto-detect";
            cape_url: string;
            back_equipment_type: "cape" | "elytra";
            ears_url: string;
            ears_type: EarsLoadOptions["textureType"] | "current_skin" | "none";
            background: string;
            background_type: "solid" | "panorama";
            name_tag: string;
        }>
    >({
        fov: 96,
        zoom: 0.8,
        global_lighting: 3,
        camera_lighting: 0.6,
        auto_rotate: false,
        auto_rotate_speed: 1,
        animation_type: "idle",
        animation_speed: 1,
        visible: {},
        background: "#000000",
        background_type: "solid",
        name_tag: "Player",
    });

    const viewer = shallowRef<InstanceType<typeof SkinViewer>>();

    watch(
        config,
        (newConfig) => {
            if (isNullish(viewer.value)) {
                return;
            }

            if (isNonNullish(newConfig.fov)) {
                viewer.value.fov = newConfig.fov;
            }

            if (isNonNullish(newConfig.zoom)) {
                viewer.value.zoom = newConfig.zoom;
            }

            if (isNonNullish(newConfig.global_lighting)) {
                viewer.value.globalLight.intensity = newConfig.global_lighting;
            }

            if (isNonNullish(newConfig.camera_lighting)) {
                viewer.value.cameraLight.intensity = newConfig.camera_lighting;
            }

            if (isNonNullish(newConfig.auto_rotate)) {
                viewer.value.autoRotate = newConfig.auto_rotate;
            }

            if (isNonNullish(newConfig.auto_rotate_speed)) {
                viewer.value.autoRotateSpeed = newConfig.auto_rotate_speed;
            }

            switch (newConfig.animation_type) {
                case "idle":
                    viewer.value.animation = new IdleAnimation();
                    break;
                case "walk":
                    viewer.value.animation = new WalkingAnimation();
                    break;
                case "run":
                    viewer.value.animation = new RunningAnimation();
                    break;
                case "fly":
                    viewer.value.animation = new FlyingAnimation();
                    break;
                case "wave":
                    viewer.value.animation = new WaveAnimation();
                    break;
                case "crouch":
                    viewer.value.animation = new CrouchAnimation();
                    break;
                case "hit":
                    viewer.value.animation = new HitAnimation();
                    break;
                default:
                    viewer.value.animation = null;
            }

            if (isNonNullish(viewer.value.animation) && isNonNullish(newConfig.animation_speed)) {
                viewer.value.animation!.speed = newConfig.animation_speed;
            }

            if (isNonNullish(newConfig.visible)) {
                Object.entries(newConfig.visible).forEach(async ([key, state]) => {
                    if (isNonNullish(viewer.value)) {
                        const [layer, part] = key.split(".", 2);

                        if (isNullish(layer) || isNullish(part)) {
                            return;
                        }

                        // @ts-ignore
                        viewer.value.playerObject.skin[part][layer].visible = state;
                    }
                });
            }

            if (!isEmptyish(newConfig.skin_url)) {
                viewer.value.loadSkin(newConfig.skin_url, {
                    model: newConfig.skin_model,
                    ears: newConfig.ears_type === "current_skin",
                });
            }

            if (!isEmptyish(newConfig.cape_url)) {
                viewer.value.loadCape(newConfig.cape_url, {
                    backEquipment: newConfig.back_equipment_type,
                });
            }

            switch (newConfig.ears_type) {
                case "standalone":
                case "skin":
                    if (!isEmptyish(newConfig.ears_url)) {
                        viewer.value.loadEars(newConfig.ears_url, {
                            textureType: newConfig.ears_type,
                        });
                    }
                    break;
                case "none":
                    viewer.value.loadEars(null);
                    break;
            }

            switch (newConfig.background_type) {
                case "solid":
                    if (!isEmptyish(newConfig.background)) {
                        viewer.value.background = newConfig.background;
                    }
                    break;
                case "panorama":
                    if (!isEmptyish(newConfig.background)) {
                        viewer.value.loadPanorama(newConfig.background);
                    }
                    break;
                default:
                    viewer.value.background = null;
            }

            if (!isEmptyish(newConfig.name_tag)) {
                viewer.value.nameTag = newConfig.name_tag;
            }
        },
        {
            immediate: true,
            deep: true,
        },
    );

    watch(
        [
            fov,
            zoom,
            global_lighting,
            camera_lighting,
            auto_rotate,
            auto_rotate_speed,
            animation_type,
            animation_speed,
            skin,
            panorama,
            name_tag,
        ],
        ([
            newFov,
            newZoom,
            newGlobalLighting,
            newCameraLighting,
            newAutoRotate,
            newAutoRotateSpeed,
            newAnimationType,
            newAnimationSpeed,
            newSkin,
            newPanorama,
            newNameTag,
        ]) => {
            if (isNonNullish(newFov)) {
                config.value.fov = newFov;
            }

            if (isNonNullish(newZoom)) {
                config.value.zoom = newZoom;
            }

            if (isNonNullish(newGlobalLighting)) {
                config.value.global_lighting = newGlobalLighting;
            }

            if (isNonNullish(newCameraLighting)) {
                config.value.camera_lighting = newCameraLighting;
            }

            if (isNonNullish(newAutoRotate)) {
                config.value.auto_rotate = newAutoRotate;
            }

            if (isNonNullish(newAutoRotateSpeed)) {
                config.value.auto_rotate_speed = newAutoRotateSpeed;
            }

            if (isNonNullish(newAnimationType)) {
                config.value.animation_type = newAnimationType;
            }

            if (isNonNullish(newAnimationSpeed)) {
                config.value.animation_speed = newAnimationSpeed;
            }

            if (isNonNullish(newSkin)) {
                config.value.skin_model = "auto-detect";
                config.value.skin_url = newSkin;
            }

            if (isNonNullish(newPanorama)) {
                config.value.background_type = "panorama";
                config.value.background = newPanorama;
            }

            if (isNonNullish(newNameTag)) {
                config.value.name_tag = newNameTag;
            }
        },
        {
            immediate: true,
        },
    );

    onMounted(async () => {
        if (isNullish(canvasRef.value)) {
            return;
        }

        viewer.value = new SkinViewer({
            canvas: canvasRef.value,
        });

        viewer.value.width = canvasSize.width.value;
        viewer.value.height = canvasSize.height.value;

        viewer.value.controls.enableRotate = true;
        viewer.value.controls.enableZoom = true;
        viewer.value.controls.enablePan = true;
    });
</script>

<template>
    <n-card size="small">
        <custom-naive-vertical-stack>
            <canvas ref="canvasRef" class="w-full h-120" data-lenis-prevent />

            <n-divider />

            <custom-naive-auto-stack justify="space-evenly">
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
                    <custom-naive-position class="w-full" placement="center">
                        <n-switch v-model:value="config.auto_rotate" />
                    </custom-naive-position>
                </n-form-item>

                <n-form-item label="自动旋转速度">
                    <n-input-number v-model:value="config.auto_rotate_speed" />
                </n-form-item>

                <n-form-item class="min-w-60" label="动画类型">
                    <x-n-select v-model:value="config.animation_type">
                        <x-n-select-option value="none">无</x-n-select-option>
                        <x-n-select-option value="idle">待机</x-n-select-option>
                        <x-n-select-option value="walk">走</x-n-select-option>
                        <x-n-select-option value="run">跑</x-n-select-option>
                        <x-n-select-option value="fly">飞</x-n-select-option>
                        <x-n-select-option value="wave">挥手</x-n-select-option>
                        <x-n-select-option value="crouch">蹲</x-n-select-option>
                        <x-n-select-option value="hit">打</x-n-select-option>
                    </x-n-select>
                </n-form-item>

                <n-form-item label="动画速度">
                    <n-input-number v-model:value="config.animation_speed" />
                </n-form-item>

                <n-form-item label="可见区域">
                    <sections-game-minecraft-skinview3d-visible-switch :value="config.visible!" />
                </n-form-item>

                <n-form-item label="皮肤地址">
                    <n-input v-model:value="config.skin_url" />
                </n-form-item>

                <n-form-item class="min-w-60" label="皮肤模型">
                    <x-n-select v-model:value="config.skin_model">
                        <x-n-select-option value="auto-detect">自动检测</x-n-select-option>
                        <x-n-select-option value="default">默认</x-n-select-option>
                        <x-n-select-option value="slim">瘦</x-n-select-option>
                    </x-n-select>
                </n-form-item>

                <n-form-item label="披风地址">
                    <n-input v-model:value="config.cape_url" />
                </n-form-item>

                <n-form-item class="min-w-60" label="背部装备类型">
                    <x-n-select v-model:value="config.back_equipment_type">
                        <x-n-select-option value="none">无</x-n-select-option>
                        <x-n-select-option value="cape">披风</x-n-select-option>
                        <x-n-select-option value="elytra">鞘翅</x-n-select-option>
                    </x-n-select>
                </n-form-item>

                <n-form-item label="耳朵地址">
                    <n-input v-model:value="config.ears_url" />
                </n-form-item>

                <n-form-item class="min-w-60" label="耳朵类型">
                    <x-n-select v-model:value="config.ears_type">
                        <x-n-select-option value="none">无</x-n-select-option>
                        <x-n-select-option value="current_skin">与当前皮肤相同</x-n-select-option>
                        <x-n-select-option value="standalone">独立</x-n-select-option>
                        <x-n-select-option value="skin">皮肤</x-n-select-option>
                    </x-n-select>
                </n-form-item>

                <n-form-item class="min-w-60" label="背景">
                    <template v-if="config.background_type === 'solid'">
                        <n-color-picker v-model:value="config.background" />
                    </template>

                    <template v-if="config.background_type === 'panorama'">
                        <n-input v-model:value="config.background" />
                    </template>
                </n-form-item>

                <n-form-item class="min-w-60" label="背景类型">
                    <x-n-select v-model:value="config.background_type">
                        <x-n-select-option value="none">无</x-n-select-option>
                        <x-n-select-option value="solid">纯色</x-n-select-option>
                        <x-n-select-option value="panorama">全景</x-n-select-option>
                    </x-n-select>
                </n-form-item>

                <n-form-item label="姓名牌">
                    <n-input v-model:value="config.name_tag" />
                </n-form-item>
            </custom-naive-auto-stack>
        </custom-naive-vertical-stack>
    </n-card>
</template>