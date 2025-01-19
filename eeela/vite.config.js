import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175,
    proxy: {
      "/api": {
        target: "https://213.210.37.186:5000", // Your backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
