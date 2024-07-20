import * as path from 'path';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import libCss from 'vite-plugin-libcss';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/libs/index.tsx'),
      name: 'jiponent',
      fileName: 'index',
      formats: ['es', 'umd', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      plugins: [
        {
          name: 'exclude-utils',
          resolveId(source) {
            if (source.startsWith(path.resolve(__dirname, 'src/libs/utils/'))) {
              return { id: source, external: true };
            }
            return null;
          },
        },
        {
          name: 'exclude-stories',
          transform(_, id) {
            if (id.endsWith('.stories.tsx')) {
              return { code: '', map: null };
            }
            return null;
          },
        },
      ],
    },
    commonjsOptions: {
      esmExternals: ['react'],
    },
    ssr: true,
  },
  plugins: [
    react(),
    dts({
      include: 'src/libs/**/*',
      insertTypesEntry: true,
      exclude: ['**/*.stories.tsx', 'src/libs/utils/**/*'],
    }),
    libCss(),
    vanillaExtractPlugin(),
  ],
});
