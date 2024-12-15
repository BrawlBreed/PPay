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
    port: 3000
  },
  envDir: "../"
});
