import { defineConfig, envField } from "astro/config";
import partytown from "@astrojs/partytown";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  experimental: {
    env: {
      schema: {
        VITE_BACK_URL: envField.string({
          context: "server",
          access: "secret",
          optional: false,
        }),
      },
    },
  },
  vite: {
    resolve: {
      alias: {
        "@components": "/src/components",
        "@layouts": "/src/layouts",
        "@pages": "/src/pages",
        "@styles": "/src/styles",
      },
    },
  },
  site: "https://cumtual.com",
  integrations: [
    tailwind(),
    react({
      experimentalReactChildren: true,
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
