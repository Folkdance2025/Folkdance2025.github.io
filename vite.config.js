import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',           // ✅ 根目錄部署，不需要加 repo 名稱
  build: {
    outDir: 'dist'     // ✅ 與 gh-pages 預設相同
  }
})
