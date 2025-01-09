// import { defineConfig } from 'vite';
// import { sync as globSync } from 'glob';
// import injectHTML from 'vite-plugin-html-inject';
// import FullReload from 'vite-plugin-full-reload';

// export default defineConfig(({ command }) => {
//   return {
//     define: {
//       [command === 'serve' ? 'global' : '_global']: {},
//     },
//     root: 'src',
//     build: {
//       sourcemap: true,
//       rollupOptions: {
//         input: globSync('./src/*.html'),
//         output: {
//           manualChunks(id) {
//             if (id.includes('node_modules')) {
//               return 'vendor';
//             }
//           },
//           entryFileNames: 'commonHelpers.js',
//           assetFileNames: '[name][extname]', // Без хэширования для изображений
//         },
//       },
//       outDir: '../dist',
//     },
//     plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
//   };
// });

import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: glob.sync('./src/*.html'),
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
});

// import { defineConfig } from 'vite';
// import { sync as globSync } from 'glob';
// import FullReload from 'vite-plugin-full-reload';
// import injectHTML from 'vite-plugin-html-inject';

// export default defineConfig(({ command }) => {
//     return {
//         define: {
//             'globalThis': {}, // Исправлено на globalThis
//         },
//         root: 'src',
//         build: {
//             sourcemap: true,
//             rollupOptions: {
//                 input: globSync('./src/*.html'),
//                 output: {
//                     chunkFileNames: '[name]-[hash].js', // Исправлено на chunkFileNames и добавлено хеширование
//                     assetFileNames: '[name].[ext]',
//                     manualChunks(id) {
//                         if (id.includes('node_modules')) {
//                             return 'vendor';
//                         }
//                     },
//                 },
//                 outDir: "../dist",
//             },
//         },
//         plugins: [injectHTML(), FullReload(['./src/**/*.html'])],
//     };
// });
