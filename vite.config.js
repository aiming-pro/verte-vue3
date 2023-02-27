import { resolve } from 'path';
import { defineConfig } from 'vite';
import esbuild from 'esbuild';
import vue from '@vitejs/plugin-vue';

const plugin = {
  name: 'minify',
  closeBundle: () => {
    esbuild.buildSync({
      entryPoints: ['./dist/verte.js'],
      minify: true,
      outfile: './dist/verte.min.js',
    });
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: false,
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/verte.js'),
      name: 'Verte',
      fileName: (format) => {
        if (format === 'es') return 'verte.esm.js';
        if (format === 'umd') return 'verte.js';
      },
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'style.css') return 'verte.css';
          return assetInfo.name;
        },
      },
    },
  },
  plugins: [vue(), plugin],
});
