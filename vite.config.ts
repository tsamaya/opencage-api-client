/// <reference types="vitest" />

import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      // Add your aliases here
      // Don't forget to add them to tsconfig.json too
      '@': path.join(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'node',
    // setupFiles: "./src/setup.node.ts",
    coverage: {
      provider: 'v8', // or 'istanbul'
      exclude: ['examples/**', 'docs/**']
    },
  },
});
