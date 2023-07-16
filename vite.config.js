import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig(
  ({ mode }) => /** @type {import('vite').UserConfig} */ {
    return {
      plugins: [sveltekit()],

      define: {
        "process.env.NODE_ENV":
          mode === "production" ? '"production"' : '"development"',
      },
      test: {
        include: ["src/**/*.{test,spec}.{js,ts}"],
      },
    };
  },
);
