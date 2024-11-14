import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  base: 'http://localhost:5173/',  // 添加这一行
  server: {  // 添加服务器配置
    origin: 'http://localhost:5173',
    cors: true,
  },
  build: {
    target: 'esnext',  // 添加这个配置
    modulePreload: false,  // 添加这个配置
    minify: false,  // 在开发时可以设置为 false，方便调试
    cssCodeSplit: false,  // 添加这个配置
    
  },
  plugins: [react(),
    federation({
      remoteType:'module',
      name: 'apipark',
      filename: 'apipark.js',  // 修改这里
      exposes: {
        './App': './src/App.tsx',  // 暴露 App 组件
        './Bootstrap': './src/Bootstrap.tsx',
      },
      remotes: {
        // 如果需要使用其他应用的组件，可以在这里配置
      },
      shared: ['react', 'react-dom', 'react-router-dom', 'antd']
    })]
})
