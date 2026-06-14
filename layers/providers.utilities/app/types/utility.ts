import type { VNode } from "vue";

export interface Utility {
	readonly icon: string | null;
	readonly name: string;

	render(): VNode;
}