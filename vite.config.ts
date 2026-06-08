import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import React from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({target: 'react', autoCodeSplitting: true}),
    React(),
    tailwindcss(),
  ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    }
})
