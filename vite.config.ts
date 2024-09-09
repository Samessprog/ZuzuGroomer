import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import babel from "@rollup/plugin-babel";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      configFile: "./babel.config.json",
    }),
  ],
});
