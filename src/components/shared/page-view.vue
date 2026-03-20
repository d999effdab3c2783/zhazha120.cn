<template>
    <router-view #="{ Component: page }">
        <transition appear mode="out-in" name="v-page">
            <component :is="page" />
        </transition>
    </router-view>
</template>