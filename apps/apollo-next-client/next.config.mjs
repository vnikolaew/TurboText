/** @type {import("next").NextConfig} */
const nextConfig = {
   webpack: (config, options) => {
      config.module.rules.push({
         test: /\.(graphql|gql)/,
         exclude: /node_modules/,
         loader: "graphql-tag/loader",
      });

      return config;
   },
   images: {
      remotePatterns: [{
         hostname: `lh3.googleusercontent.com`,
         protocol: `https`,
      }]
   }
};

export default nextConfig;
