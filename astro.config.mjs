import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

export default defineConfig({
  site: "https://santimarquez.es",
  output: "hybrid",
  adapter: node({ mode: "standalone" }),
  // Disable origin check so POST /api/contact works behind reverse proxy (Traefik).
  // The browser sends Origin: https://santimarquez.es but the server may see an internal URL.
  security: { checkOrigin: false },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [tailwind()],
});
