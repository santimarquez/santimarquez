import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

export default defineConfig({
  site: "https://santimarquez.es",
  output: "hybrid",
  adapter: node({ mode: "standalone" }),
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [tailwind()],
});
