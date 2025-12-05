import { defineConfig, envField } from "astro/config";
import partytown from "@astrojs/partytown";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      VITE_BACK_URL: envField.string({
        context: "server",
        access: "secret",
        optional: false,
      }),
    },
  },

  vite: {
    resolve: {
      alias: {
        "@components": "/src/components",
        "@layouts": "/src/layouts",
        "@pages": "/src/pages",
        "@styles": "/src/styles",
        "@utils": "/src/utils",
      },
    },
  },

  site: "https://cumtual.com",

  integrations: [
    tailwind(),
    sitemap(),
    react({
      experimentalReactChildren: true,
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],

  build:{
    minify: true
  },

  adapter: cloudflare(),
});