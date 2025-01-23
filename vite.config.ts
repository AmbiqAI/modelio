import { defineConfig } from 'vite';
import { pigment } from '@pigment-css/vite-plugin';
import { createTheme } from '@mui/material';
import react from '@vitejs/plugin-react';

/**
 * @type {import('@pigment-css/vite-plugin').PigmentOptions}
 */
const pigmentConfig = {
  transformLibraries: ['@mui/material'],
  theme: createTheme({
    cssVariables: true,
  })
};

export default defineConfig(() => {
  const APP_BASE_URL = process.env.APP_BASE_URL || '/';
  return {
    plugins: [
      pigment(pigmentConfig),
      react()
    ],
    // server: {
    //   port: 3000,
    // },
    base: APP_BASE_URL,
    build: {
      outDir: 'dist',
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  }
});
