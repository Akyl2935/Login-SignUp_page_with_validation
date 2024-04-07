import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// This is an example configuration
export default defineConfig({
  plugins: [reactRefresh()],
  // Specify the entry file here
  build: {
    // Change 'src/index.js' to the path of your new entry file
    rollupOptions: {
      input: {
        main: 'src/App.jsx',
      },
    },
  },
});