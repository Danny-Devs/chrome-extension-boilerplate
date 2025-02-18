import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "extension", // Build output to 'extension/'
    rollupOptions: {
      input: "src/index.js",
      output: {
        entryFileNames: "content.js",
      },
    },
  },
  publicDir: "public", // ✅ Ensures files in 'public/' are copied over
});