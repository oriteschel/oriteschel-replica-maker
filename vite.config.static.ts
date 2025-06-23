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
  base: "./", // Use relative paths for static deployment
  build: {
    outDir: "dist-static",
    rollupOptions: {
      output: {
        manualChunks: undefined, // Single bundle for better static compatibility
      },
    },
  },
});