import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
export default defineConfig({
  site: process.env.SITE_URL || env.SITE_URL || 'https://respawnradar.pages.dev',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
