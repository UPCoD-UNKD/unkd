import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroIcon from "astro-icon"; 

export default defineConfig({
  site: "http://localhost:4321",
  integrations: [
    tailwind(),
    astroIcon(), 
  ],
});

