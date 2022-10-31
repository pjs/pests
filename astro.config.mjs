//import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import { SITE } from './src/config.mjs'; //const __dirname = path.dirname(fileURLToPath(import.meta.url));
// https://astro.build/config

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  // Astro uses this full URL to generate your sitemap and canonical URLs in your final build
  site: SITE.origin,
  base: SITE.basePathname,
  output: 'server',
  adapter: cloudflare(),
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), partytown({
    config: {
      forward: ['dataLayer.push']
    }
  }), vue()]
});