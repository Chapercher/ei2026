import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://chapercher.github.io',
  base: process.env.NODE_ENV === 'production' ? '/ei2026' : undefined,
  server: {
    host: '0.0.0.0',
    port: 4321,
  },
  vite: {
    server: {
      watch: { usePolling: true },
      hmr: { clientPort: 4321 },
    },
  },
});
