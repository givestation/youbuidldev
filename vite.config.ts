
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    hmr: {
      host: "0.0.0.0"
    },
    allowedHosts: [
      ".replit.dev"
    ]
  }
});
