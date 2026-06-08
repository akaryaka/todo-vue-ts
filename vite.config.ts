import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

const REPO_NAME = 'todo-vue-ts'; 
// https://vite.dev/config/
export default defineConfig({
  base: `/${REPO_NAME}/`,
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',   
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'favicon.svg'],
      filename: 'site.webmanifest',
      manifest: {
        name: 'todo-vue-ts',
        short_name: 'todo-vue-ts',
        description: 'Todo desc',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone', // Убирает адресную строку браузера
        start_url: `/${REPO_NAME}/`,
        scope: `/${REPO_NAME}/`,
        icons: [
          {
            src: `/${REPO_NAME}//web-app-manifest-192x192.png`,
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: `/${REPO_NAME}//web-app-manifest-512x512.png`,
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: `/${REPO_NAME}//web-app-manifest-512x512.png`,
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable' // Важно для адаптивных иконок на Android
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg,woff,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.yourdomain\.com\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 // 1 день
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ],
  server: {
    open: true,
  },
})
