import 'dotenv/config';
import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// eslint-disable-next-line import/no-extraneous-dependencies
import eslintPlugin from 'vite-plugin-eslint';

// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 根據當前工作目錄中的 `mode` 加載 .env 文件
  // 設置第三個參數為 '' 來加載所有環境變量，而不管是否有 `VITE_` 前綴
  const env = loadEnv(mode, process.cwd(), '');
  console.log('REPOSITORY NAME : ', env.REPOSITORY_NAME);

  return {
    base: mode === 'production' ? `/${env.REPOSITORY_NAME}/` : '/',
    plugins: [
      vue(),
      eslintPlugin({
        include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      // 小於 4KB 的資源將內聯為 base64
      assetsInlineLimit: 4096,
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          // https://israynotarray.com/other/20220928/1377668819/
          // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
          sanitizeFileName(name) {
            const match = DRIVE_LETTER_REGEX.exec(name);
            const driveLetter = match ? match[0] : '';
            // substr 是被淘汰語法，因此要改 slice
            return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '');
          }
        }
      }
    }
  };
});
