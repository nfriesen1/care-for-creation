import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  // Expose REACT_APP_* variables to the browser (as import.meta.env.REACT_APP_*) so the
  // EmailJS keys set in Netlify under their Create React App names keep working.
  // These are EmailJS *public* identifiers, so exposing them client-side is expected.
  envPrefix: ['VITE_', 'REACT_APP_']
})
