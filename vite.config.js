import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

export default defineConfig(
  ({ mode }) => /** @type {import('vite').UserConfig} */ {
    return {
      plugins: [
        sveltekit({
          preprocess: vitePreprocess(),
          adapter: adapter(),
        }),
      ],

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
