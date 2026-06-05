import path from 'path';
import { defineConfig } from 'vitest/config';

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
    exclude: [
      'tests/integration.spec.ts',
      'tests/e2e/**',
      'node_modules',
      'dist',
    ],
    coverage: {
      provider: 'v8', // or 'istanbul'
      exclude: [
        'examples/**',
        'docs/**',
        'dist/**',
        'scripts/**',
        'eslint.config.mjs',
        'vite.config.ts',
        'rslib.browser.config.ts',
        'rslib.config.ts',
      ],
    },
  },
});
