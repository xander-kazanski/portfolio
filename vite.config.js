import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Add other HTML files here
        "oldgram": resolve(__dirname, 'portfolio-item-oldagram.html'),
        "tenzies": resolve(__dirname, 'portfolio-item-tenzies.html'),
        "password-generator": resolve(__dirname, 'portfolio-item-password-generator.html'),
        "meme-generator": resolve(__dirname, 'portfolio-item-meme-generator.html'),
        "quiz-app": resolve(__dirname, 'portfolio-item-quiz-app.html'),
        "personal-dashboard": resolve(__dirname, 'under-development.html'),
        css: resolve(__dirname, './css/style.css'),
        'index.js': resolve(__dirname, './js/index.js')

        // Add more as needed
      },
    },
  },
})