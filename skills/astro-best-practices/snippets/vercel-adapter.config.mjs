import { vercel } from '@astrojs/vercel';

export default {
  adapter: vercel({
    edgeMiddleware: true,
    maxDuration: 10,
  }),
  output: 'server',
};
