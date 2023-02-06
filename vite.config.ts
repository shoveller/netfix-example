import * as path from 'path'
import { defineConfig } from 'vite'
import barrels from './src/utils/barrelPlugin'

export default defineConfig({
  resolve: {
    alias: [{ find: 'src', replacement: path.resolve(__dirname, 'src') }],
  },
  build: {
    lib: {
      entry: 'src/components',
      name: 'libs',
      formats: ['iife'],
    },
    sourcemap: 'inline',
  },
  plugins: [
    barrels({
      entry: 'src/components',
      extension: /^((?!.stories\.ts$).)*$/,
    }),
  ],
})
