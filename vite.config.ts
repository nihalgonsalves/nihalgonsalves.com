import { defineConfig } from "vite";

export default defineConfig({
	server: {
		hmr: {
			port: 3001,
		},
	},
	build: {
		minify: "esbuild",
		cssMinify: "lightningcss",
	},
});
