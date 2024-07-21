import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/iq_vanila/",
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
