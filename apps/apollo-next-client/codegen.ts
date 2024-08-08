import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
   schema: "http://api.apollo-next.com:4000",
   documents: ["src/**/*.{tsx,ts,graphql}"],
   generates: {
      "./__generated__/": {
         preset: "client-preset",
         presetConfig: {
            gqlTagName: "gql",
         },
         plugins: [
            "typescript",
            "typescript-operations",
            "typescript-graphql-files-modules",
            "fragment-matcher",
         ],
      },
      "./graphql.schema.json": {
         plugins: [`introspection`],
      }
   },
   ignoreNoDocuments: true,
};

export default config;