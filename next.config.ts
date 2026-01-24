import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Optimasi untuk smooth scroll */
  compress: true,

  /* Experimental features untuk better performance */
  experimental: {
    optimizePackageImports: ["gsap"],
  },
};

export default nextConfig;

