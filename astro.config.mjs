import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://faisalk1666.github.io',
  base: import.meta.env.PROD ? '/my-portfolio' : '/',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
