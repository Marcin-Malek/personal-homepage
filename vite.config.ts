import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	plugins: [react(), svgr()],
	assetsInclude: ["**/*.jpg", "**/*.png", "**/*.svg"],
	base: "/",
	server: {
		port: 3000
	},
	build: {
		outDir: "build"
	}
});