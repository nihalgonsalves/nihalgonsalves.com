import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [tailwindcss()],
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
