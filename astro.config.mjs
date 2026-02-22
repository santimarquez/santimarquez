import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
export default defineConfig({
  site: "https://santimarquez.es",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [tailwind()],
});
