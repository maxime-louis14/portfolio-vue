import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], // Utilisation du plugin Vue.js pour Vite
  server: {
    watch: {
      usePolling: true, // Activation du polling pour le watch
      poll: 1000 // Interval de polling en millisecondes (1 seconde)
    },
    host: true, // Utilisation de l'hôte par défaut (localhost)
    strictPort: true, // Port strictement défini (3000)
    port: 3000 // Port du serveur de développement Vite
  },
  envPrefix: 'VITE_', // Préfixe pour les variables d'environnement spécifiques à Vite
  exclude: ['node_modules/@vercel/speed-insights/**/*.{ts,tsx}'],

});
