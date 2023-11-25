import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://bitcreative-studios.github.io',
  base: '/minor-moon',
  integrations: [tailwind()]
});