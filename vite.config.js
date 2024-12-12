// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        preloader: "index.html",
        main: "reload.html",
      },
    },
    minify: "terser",
  },
  server: {
    open: true, // This option opens the browser automatically
  },
  publicDir: "public",
});
