
const nextConfig = {
  output: "export",

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Image optimization
  images: {
    unoptimized: true, // Required for static export
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

module.exports = nextConfig;
