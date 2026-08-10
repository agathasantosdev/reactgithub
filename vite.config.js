import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/meu-curriculo/' // Adicione esta linha para definir o caminho base do seu projeto
})
