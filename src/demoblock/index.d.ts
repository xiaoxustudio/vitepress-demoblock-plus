declare module "*.vue" {
	import type { DefineComponent } from "vue";
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare module "vitepress-demoblock-xr" {
	const demoblock: (md: any) => void;
	import type { DefineComponent } from "vue";
	const demo: DefineComponent<{}, {}, any>;
	export default demoblock;
}
