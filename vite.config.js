import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "extension", // Build output to 'extension/'
    emptyOutDir: true, // Deletes previous build files, but not public assets
    rollupOptions: {
      input: "src/index.js",
      output: {
        entryFileNames: "content.js",
      },
    },
  },
  publicDir: "public", // ✅ Ensures files in 'public/' are copied over
});