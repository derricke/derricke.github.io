import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
        return [
          {
            source: '/resume', // The URL you want to redirect from
            destination: 'https://drive.google.com/file/d/1uEMAJjRM2XcgCggiL5vOAUrwb1FZKwsW/view?usp=sharing', // The URL you want to redirect to
            permanent: true, // Set to true for a 308 (permanent) redirect, false for a 307 (temporary)
          },
          // Add more redirect objects as needed
        ];
      },
  output: 'export',
  images: {
    unoptimized: true,
  }
  /* config options here */
};

export default nextConfig;
