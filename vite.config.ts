import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cpSync, mkdirSync } from "fs";
import path from "path";

export default defineConfig({
  base: "/Personal/",
  plugins: [
    react(),
    {
      name: "copy-assets",
      apply: "build",
      enforce: "post",
      closeBundle() {
        const rootDir = process.cwd();
        
        // Copy entire assets/images directory
        try {
          mkdirSync(path.join(rootDir, "dist/assets/images"), { recursive: true });
          cpSync(
            path.join(rootDir, "assets/images"),
            path.join(rootDir, "dist/assets/images"),
            { recursive: true, force: true }
          );
        } catch (e) {
          console.log("Could not copy images:", e);
        }

        // Copy entire assets/certs directory
        try {
          mkdirSync(path.join(rootDir, "dist/assets/certs"), { recursive: true });
          cpSync(
            path.join(rootDir, "assets/certs"),
            path.join(rootDir, "dist/assets/certs"),
            { recursive: true, force: true }
          );
        } catch (e) {
          console.log("Could not copy certs:", e);
        }
      }
    }
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true
  }
});
