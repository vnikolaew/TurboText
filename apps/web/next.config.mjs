/** @type {import("next").NextConfig} */
const nextConfig = {
   experimental: {
      typedRoutes: true,
   },
   compiler: {},
   eslint: { ignoreDuringBuilds: true  },
   webpack: (config, options) => {
      const isServer = options?.isServer;
      config.module.rules.push({
         test: /\.(ogg|mp3|wav|mpe?g)$/i,
         loader: "file-loader",
         options: {
            name: "[path][name].[ext]",
         },
      });
      return config;
   },
   images: {
      remotePatterns: [
         {
            hostname: "lh3.googleusercontent.com",
            protocol: `https`,
         },
         {
            hostname: "randomuser.me",
            protocol: `https`,
         },
         {
            hostname: "files.stripe.com",
            protocol: `https`,
         },
         {
            hostname: "dummyimage.com",
            protocol: `https`,
         },
         {
            hostname: "dummyimage",
            protocol: `https`,
         },
         {
            protocol: "https",
            hostname: "replicate.com",
         },
         {
            protocol: "https",
            hostname: "replicate.delivery",
         },
         {
            protocol: "https",
            hostname: "flaglog.com",
         },
      ],
   },
   transpilePackages: ["@repo/ui", "@repo/db", "@repo/emails", "@repo/ai", "jotai-devtools"],
   typescript: {
      ignoreBuildErrors: true,
   },
};

export default nextConfig;
