import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Update `site` to your canonical domain before launch (e.g. https://cybercap.be)
export default defineConfig({
  site: 'https://cybercap.be',
  integrations: [tailwind(), sitemap()],
});
