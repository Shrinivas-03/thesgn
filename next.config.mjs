/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true, // Enable MDX
  },

  // 🚨 Required so Next.js doesn't complain
  turbopack: {},

  // 🚨 This forces Webpack for MDX transforms only
  webpack(config) {
    return config;
  },

  pageExtensions: ["js", "jsx", "mdx"],
};

export default nextConfig;
