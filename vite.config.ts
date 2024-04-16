import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer(), cssnano({ preset: "default" })],
    },
  },
});
