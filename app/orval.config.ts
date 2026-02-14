import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: "http://localhost:3200/api-json",
    output: {
      target: "src/app/services",
      client: "react-query",
      mode: "tags-split",
      httpClient: "axios",
      override: {
        mutator: {
          path: "src/app/lib/api-client.ts",
          name: "apiClient",
        },
      },
    },
  },
});
