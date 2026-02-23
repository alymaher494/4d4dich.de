import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "4d4dich.de",
      },
      {
        protocol: "https",
        hostname: "cms.4d4dich.de", // WordPress subdomain
      },
    ],
  },
};

export default nextConfig;

