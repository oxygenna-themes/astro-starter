import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://foxi.netlify.app/",
  integrations: [
    icon(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
  // vite: { // Vite config removed if no other plugins need it
  //   plugins: [
  //     // tailwindcss(), // Removed
  //   ],
  // },
});
