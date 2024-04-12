import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import type { ConfigEnv, UserConfigExport } from 'vite'
import { loadEnv } from 'vite'
// @ts-ignore
import pxTo2Rem from 'postcss-plugin-px2rem'

export default ({ mode }: ConfigEnv): UserConfigExport => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  return {
    base: env.VITE_PUBLIC_PATH,
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },

    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      },
      chunkSizeWarningLimit: 3000
    },
    server: {
      port: 3000,
      proxy: {
        [env.VITE_PROXY_PATH]: {
          target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(env.VITE_PROXY_PATH, '')
        }
      }
    },
    css: {
      postcss: {
        plugins: [
          pxTo2Rem({
            rootValue: 192, // 设计稿宽度的 1/10
            mediaQuery: false, // 允许媒体查询
            minPixelValue: 3 // 设置要替换的最小像素值（3px会被转rem），默认0
          })
        ]
      }
    }
  }
}
