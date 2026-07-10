import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://marcelomamorim.github.io",
  base: "/aws-certification-hub/",
  output: "static",
  integrations: [sitemap()]
});
