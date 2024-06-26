import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      VITE_APP_AUTH0_DOMAIN: JSON.stringify(process.env.VITE_APP_AUTH0_DOMAIN),
      VITE_APP_AUTH0_CLIENT_ID: JSON.stringify(
        process.env.VITE_APP_AUTH0_CLIENT_ID
      ),
    },
  },
});
