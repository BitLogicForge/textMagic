import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: '/textMagic/',
    server: {
      host: true,
    },
  esbuild: mode === 'production' ? { drop: ['console', 'debugger'] } : false,
}));
