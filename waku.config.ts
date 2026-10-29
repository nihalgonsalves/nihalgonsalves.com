import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "waku/config";

export default defineConfig({
	vite: {
		plugins: [
			cloudflare({
				viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
				inspectorPort: false,
			}),
			tailwindcss(),
		],
		server: {
			hmr: {
				port: 3001,
			},
		},
	},
});
