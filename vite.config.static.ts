import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/oriteschel-replica-maker/", // GitHub Pages repository path
  build: {
    outDir: "dist-static",
    rollupOptions: {
      output: {
        manualChunks: undefined, // Single bundle for better static compatibility
      },
    },
  },
});