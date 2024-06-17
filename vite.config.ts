import path from 'node:path';
import fs from 'node:fs';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

const input = {
  _default: resolve('./client/_default.ts'),
};
// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: 'node_modules/.viteClient',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: fs.readFileSync(
          path.join(__dirname, '/client/variables.scss'),
          'utf-8',
        ),
      },
    },
  },
  plugins: [
    vue(),

    // AutoImport({
    //   resolvers: [],
    // }),
    Components({
      resolvers: [IconsResolver(), ElementPlusResolver()],
    }),
    Icons(),
  ],
  server: {
    port: Number(process.env.PORT) + 2,
    cors: true,
  },
  build: {
    rollupOptions: {
      input,
    },
  },

  resolve: {
    alias: {
      '/@': resolve('/client', '/'),
      'vue': 'vue/dist/vue.esm-bundler.js',
    },
  },
});

// Safe resolve file
function resolve(dir: string, end = '') {
  return path.resolve(__dirname, dir) + end;
}
