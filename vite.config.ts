import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

function gql() {
  return {
    name: "generic-persistgraphql",

    transform(code, id) {
      if (!/\.graphql$/.test(id)) return;

      return {
        code: `export default 12;`,
        map: null, // unless you support sourcemaps somehow
      };
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      topFile2: path.resolve("./topFile2.ts"),
      app: path.resolve("./app"),
    },
  },
  plugins: [react(), gql()],
});
