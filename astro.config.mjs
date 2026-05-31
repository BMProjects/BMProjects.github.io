import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const site = process.env.SITE_URL ?? 'https://bmprojects.github.io';

export default defineConfig({
  site,
  integrations: [tailwind({ applyBaseStyles: false })],
});
