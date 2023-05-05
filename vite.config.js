import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import mkcert from "vite-plugin-mkcert";
/* if you're using React */
// import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    /* react(), // if you're using React */
    symfonyPlugin(),
    mkcert(),
  ],
  root: ".",
  base: "/build/",
  server: {
    https: true,
    cors: true,
    host: true,
    origin: "https://node.symfo.localhost:5173",
  },
  build: {
    manifest: true,
    emptyOutDir: true,
    assetsDir: "",
    outDir: "./public/build",
    rollupOptions: {
      input: {
        app: "./assets/app.js",
      },
    },
  },
});
