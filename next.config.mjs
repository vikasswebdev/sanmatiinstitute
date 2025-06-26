/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/E-learning-1.0.0" : "",
  assetPrefix: isProd ? "/E-learning-1.0.0/" : "",
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable server-side features for static export
  experimental: {
    appDir: true,
  },
};

export default nextConfig;