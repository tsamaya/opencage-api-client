import { defineConfig } from '@rslib/core';
import { pluginUmd } from '@rsbuild/plugin-umd';

export default defineConfig({
  source: {
    entry: {
      index: 'src/browser.ts', // or your main browser entry
    },
  },
  lib: [
    {
      format: 'umd',
      syntax: 'es2022',
      bundle: true,
      dts: false,
    },
  ],
  output: {
    target: 'web',
    filename: { js: 'opencage-api.min.js' },
    cleanDistPath: false,
    sourceMap: true,
    minify: true, // Minify the output
  },
  plugins: [
    pluginUmd({
      name: 'opencage', // global namespace
    }),
  ],
});
