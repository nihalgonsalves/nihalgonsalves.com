import { defineConfig } from "vite";

export default defineConfig({
	build: {
		minify: "esbuild",
		cssMinify: "lightningcss",
	},
});
