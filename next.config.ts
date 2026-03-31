import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    inlineCss: true, // This optimizes your CSS delivery for the static export
    prefetchInlining: true
  },
};

export default nextConfig;