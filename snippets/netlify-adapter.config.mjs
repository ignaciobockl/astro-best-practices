import { netlify } from '@astrojs/netlify';

export default {
  adapter: netlify({
    edge: false,
  }),
  output: 'server',
};
