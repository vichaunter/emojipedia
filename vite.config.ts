/// <reference types="vitest" />
/// <reference types="vite/client" />

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  plugins: [react(), tailwindcss(), mkcert()],
  test: {
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    coverage: {
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/main.tsx",
        "src/Router.tsx",
        "src/vite-env.d.ts",
        "src/lib/emojis.ts",
        "src/types/**/*.ts",
      ],
      reporter: ["text", "lcov", "clover", "json"],
    },
    environment: "jsdom",
    globals: true,
    css: true,
    testTimeout: 10000,
    reporters: ["verbose"],
  },
});
