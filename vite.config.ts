import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import viteCompression from 'vite-plugin-compression';

import { resolve } from 'path'
// import sitemap from 'vite-plugin-sitemap'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: 'less', // css in js
          resolveIcons: true // 自动处理图标
        }),
      ],
      dts: true
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      // filter:/\.(js|mjs|json|css|html|woff2)$/i,
      deleteOriginFile: false  // 保留原始文件[6](@ref)
    })
  ],
  server: {
    host: '0.0.0.0'
  },
  build: {
    assetsInlineLimit: 4096, // 默认 4KB 以下文件转 Base64
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['ant-design-vue', 'axios', 'vue-router', 'bootstrap', 'echarts'],
        },
        // assetFileNames: 'assets/[name]-[hash].[ext]',  // 图片/字体等
        // chunkFileNames: `js/[name]-[hash].js`,        // 代码分割块
        // entryFileNames: `js/[name]-[hash].${timestamp}.js`
      },
    },
    terserOptions: {
      compress: { drop_console: true, drop_debugger: true },
    },
  },
  resolve: {
    alias: {
      'basic@':resolve(__dirname, 'src'),
      'res@': resolve(__dirname, 'src/assets'),
      'api@':resolve(__dirname, 'src/api'),
      'router@':resolve(__dirname, 'src/router'),
      'com@':resolve(__dirname, 'src/components'),
      'views@':resolve(__dirname, 'src/views')
    },
    extensions: ['.js', '.ts', '.vue', '.json']
  }
})
