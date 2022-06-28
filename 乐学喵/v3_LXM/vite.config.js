import vue from "@vitejs/plugin-vue";
import styleImport, { VantResolve } from "vite-plugin-style-import";

export default {
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 3080,
    proxy: {},
  },
};
