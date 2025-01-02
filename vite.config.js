import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Update this if your app is served from a subpath
  build: {
    outDir: 'build',
  },
})
