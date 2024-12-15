import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.svg'],
  },
  build: {
    outDir: '../dist'
  },
  base: '/',
  server: {
    host: true,
    port: (process.env.NODE_ENV === 'production' ? process.env.PORT : 5173) || 4000,
  },
  envDir: "../"
});
