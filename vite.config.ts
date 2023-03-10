import { defineConfig } from 'vite'
// https://vitejs.dev/config/
const config = defineConfig({
  resolve: {
    alias: {
      lib: './src/lib',
      static: './static',
    },
  },
  server: {
    port: 3000,
  },
})

export default config
