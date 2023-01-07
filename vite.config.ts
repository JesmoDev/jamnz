import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["bill-fill.svg", "JamnzLogo.png"],
      manifest: {
        name: "Jamnz",
        icons: [
          {
            src: "JamnzLogo.png",
            sizes: "256x256",
            type: "image/png",
          },
        ],
        start_url: "/",
        display: "standalone",
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
