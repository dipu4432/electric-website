import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 400,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/') || id.includes('node_modules/react-router')) {
            return 'vendor';
          }
          if (id.includes('node_modules/react-bootstrap') || id.includes('node_modules/bootstrap')) {
            return 'ui';
          }
          if (id.includes('node_modules/react-toastify')) {
            return 'toast';
          }
          if (id.includes('node_modules/react-icons')) {
            return 'icons';
          }
        },
      },
    },
  },
})
