import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path/win32";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, "../server/public"),
    emptyOutDir: true,
  },
});
