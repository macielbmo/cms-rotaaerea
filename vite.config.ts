import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';

dotenv.config();

// objeto de substituição para substituir process.env
const envReplace = Object.keys(process.env).reduce((prev, key) => {
  prev[`process.env.${key}`] = JSON.stringify(process.env[key]);
  return prev;
}, {});


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace(envReplace)
  ],
  server: {
    port: 3000,
  }
})
