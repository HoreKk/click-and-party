import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

import { cloudflare } from "@cloudflare/vite-plugin";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cloudflare(),
    tsconfigPaths(),
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
  ],
});
