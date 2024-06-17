import { defineFlowConfig } from '@monkeyplus/flow';

export default defineFlowConfig({
  image: {
    screens: {
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536,
    },
  },
  modules: [
    '@monkeyplus/flow-sitemap',
    '@monkeyplus/flow-vue',
    '@monkeyplus/flow-vite',
    '@monkeyplus/flow-images',
    '@monkeyplus/flow-icons',
    '@monkeyplus/flow-content',
    '@monkeyplus/flow-seo',
    '@monkeyplus/flow-netlify-cms',
    '@monkeyplus/flow-netlify-functions',

  ],
  alias: { '/@/*': './client/*' },
  viteClient: {
    dir: '/client',
  },
  netlifyCms: {
    base: '/',
    rootDir: '/var/task',
  },
  netlify: {
    proxy: {
      '/proxy-auth/*': '/.netlify/functions/auth',
      '/proxy-lead/*': '/.netlify/functions/lead',
    },
  },
  vue: { },
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ['unplugin-icons/types/vue'],
      },
    },
  },
});
