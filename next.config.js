/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // enables static export

  images: {
    unoptimized: true, // disable image optimization for static export
  },

  basePath: isProd ? "/uzairansari11.github.io/" : "",
  assetPrefix: isProd ? "/uzairansari11.github.io/" : "",
  
};

module.exports = nextConfig;
