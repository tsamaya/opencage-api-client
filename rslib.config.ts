import { defineConfig } from '@rslib/core';

export default defineConfig({
  source: {
    entry: {
      index: ['src/**/*.ts', '!src/browser.ts'], // Exclude browser entry
    },
  },
  lib: [
    {
      format: 'esm',
      // syntax: 'es2022', tsconfig will handle the syntax
      bundle: false,
      dts: true,
    },
    {
      format: 'cjs',
      // syntax: 'es2022', tsconfig will handle the syntax
      bundle: false,
      dts: false, // ESM and CJS will share the same dts file
    },
  ],
  output: {
    target: 'node',
    cleanDistPath: false,
    sourceMap: true,
  },
});
