/* eslint-disable import/no-extraneous-dependencies */

import { createHtmlPlugin } from 'vite-plugin-html';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    createHtmlPlugin({
      minify: true,
      entry: path.join(__dirname, 'src'),
      inject: {
        data: {
          title: 'Memo',
          injectScript: '<script type="module" src="/src/index.jsx"></script>',
        },
        tags: [
          {
            injectTo: 'body-prepend',
            tag: 'div',
            attrs: {
              id: 'root',
            },
          },
        ],
      },
    }),
    splitVendorChunkPlugin(),
  ],
  server: {
    base: '/public/',
    // watch: {
    //   ignored: ['./src/mirage/**/*'],
    // },
  },
  build: {
    minify: 'terser',
    target: ['es2015', 'es2019'],
    terserOptions: {
      output: {
        comments: false,
      },
    },
  },
  css: { postcss: './postcss.config.js' },
});
