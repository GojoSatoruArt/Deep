import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [sveltekit(), tailwindcss()],
  ssr: {
    noExternal: process.env.NODE_ENV === "production" ? ["@carbon/charts"] : [],
  },
});
