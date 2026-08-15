import type { VNode } from "vue";
import type { MaybeRefOrGetter } from "@vue/reactivity";

export interface Utility {
    readonly icon: string | null;
    readonly name: MaybeRefOrGetter<string>;

    render(): VNode;
}