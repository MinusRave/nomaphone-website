// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import remarkRates from "./src/lib/remark-rates.mjs";

export default defineConfig({
  site: "https://nomaphone.com",
  integrations: [mdx(), sitemap(), react()],
  markdown: { remarkPlugins: [remarkRates] },
  vite: { plugins: [tailwindcss()] },
});
