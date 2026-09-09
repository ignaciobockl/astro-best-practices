import { defineSitemapPlugin } from 'astro-sitemap';

export default {
  site: 'https://example.com',
  plugins: [
    defineSitemapPlugin({
      filter: (page) => !page.url.includes('/draft'),
    }),
  ],
};
