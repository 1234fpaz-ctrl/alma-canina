// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Netlify expone la URL pública del sitio en la variable URL durante el build.
// Si conectas un dominio propio, Netlify la actualiza automáticamente.
const SITE = process.env.SITE_URL || process.env.URL || 'https://alma-canina.netlify.app';

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin') && !page.includes('/contacto/gracias') && !page.includes('/404'),
      i18n: undefined,
    }),
  ],
  // @ts-ignore — diferencia de tipos entre versiones de Vite; funciona correctamente.
  vite: { plugins: [tailwindcss()] },
  image: { responsiveStyles: true },
});
