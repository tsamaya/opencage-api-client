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
      syntax: 'es2022',
      bundle: false,
      dts: true,
    },
    {
      format: 'cjs',
      syntax: 'es2022',
      bundle: false,
      dts: true,
    },
  ],
  output: {
    target: 'node',
    cleanDistPath: false,
    sourceMap: true,
  },
});
