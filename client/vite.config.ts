import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import unfonts from 'unplugin-fonts/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), unfonts({
    custom: {
      families: [{
        name: 'Chomsky',
        local: 'Chomsky',
        src: './src/assets/fonts/Chomsky.otf'
      }, {
        name: 'ChunkFive',
        local: 'ChunkFive',
        src: './src/assets/fonts/ChunkFive.ttf'
      }, {
        name: 'Adler',
        local: 'Adler',
        src: './src/assets/fonts/Adler.ttf'
      }]
    }
  })],
})
