import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portofolio-react-tailwindcss/', // Sesuaikan dengan subfolder jika diperlukan
  plugins: [react()],
});
