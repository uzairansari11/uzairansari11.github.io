/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // Static export for GitHub Pages
  output: "export",

  // Since this is a user page repo served at root, no basePath needed
  basePath: "",
  assetPrefix: isProd ? "" : "",
}

module.exports = nextConfig
